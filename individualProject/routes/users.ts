import * as express from 'express';
import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import * as jwt from 'jsonwebtoken';
import User from '../models/user';
import * as mongodb from 'mongodb';
import Order from '../models/order';

let ObjectId = mongodb.ObjectID;
let router = express.Router();
//configure passport local strategy
let LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new LocalStrategy(function(username1, password,done){
    User.findOne({username:username1.trim().toLowerCase()})
        .then(function(user){
            //if no user found, send back error message
            if(!user){
                return done(null, false, {message:'incorrect username!'});
            }
            //if password dose not match, send back error message
            if(!user.validatePassword(password)){
                return done(null, false, {message:'incoreect password!'})
            }
            user.password = null;
            return done(null,user);
        })
        .catch((err) =>{
            return done(err);
        });
}));

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!')
    User.find()
    .populate('orders')
    .then((users) =>{
        res.send(users);
    })
});

router.post('/addorders/:userId', (req, res) =>{
    let userId = new ObjectId(req.params['userId']);
    console.log("userId  " + userId);
    let orderId = new ObjectId(req.body.orderId);
    console.log("orderId  " + orderId);
    User.update({_id:userId}, {$push:{orders:orderId}})
    .then((user) =>{
            console.log("!!!!!!!!!!!!! add success");
            console.log(user.orders);
            res.sendStatus(201);
        })
        .catch((err) =>{
            res.sendStatus(400).send(err);
        });
});

//register
router.post('/register', (req, res) =>{
    let errors = req.validationErrors();

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is  required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('confirmPassword', 'Password do not match')
    .equals(req.body.password);

    if(errors){
        console.log(errors[0].msg);
        res.status(400).send(errors);
    }else{
        let newUser = new User();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.setPassword (req.body.password);
        newUser.save()
        .then((user) =>{
            console.log('user created!!!')
            let newOrder = new Order();
            newOrder.userId=user._id;
            newOrder.save()
            .then(() =>{
                console.log('!!!order created!!')
                res.send(user);
            })
            .catch(() =>{
                console.log('!!order not created!')
                res.sendStatus(400);
            })
            //res.send(user);
            //res.sendStatus(201);
        })
        .catch((err) =>{
            console.log('user not created')
            res.send(err);
        })
    }
});

router.post('/login', passport.authenticate('local',
    {failureRedirect: '/longin'}), (req, res)=>{
    console.log('!!!!!!!!users/login');
    if(req.isAuthenticated()){
        console.log('!!!!!!!!Authenticated');
        let data = {
            token:req.user.generateToken(),
            username: req.user.username,
            admin:req.user.admin
        }
        res.send(data);
    }else{
        res.send('you are not authenticated!');
    }
});

export default router;
