import * as express from 'express';
import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import * as jwt from 'jsonwebtoken';
import User from '../models/user';

let router = express.Router();

let LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user,done) =>{
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id,function(err, user){
        done(err,user);
    });
});

passport.use(new LocalStrategy(function(username, password,done){
    User
        .findOne({username:username. trim().toLowerCase()})
        .then(function(user){
            if(!user){
                return done(null, false, {message:'incorrect username!'});
            }
            if(!user.validatePassword(password)){
                return done(null, false, {message:'incorrect password'});
            }
            user.password = null;
            return done(null,user);
        })
        .catch((err) =>{
            return done(err);
        });
}));

router.post('/register', (req, res) =>{
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email ia not valid').isEmail();
    req.checkBody('confirmPassword', 'Password does not match').equals(req.body.password);

    let errors = req.validationErrors();
    if(errors){
        //?????????????????????errors is boolean then how to send it?
        res.status(400).send(errors)
    }else{
        let newUser = new User();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.setPassword(req.body.password);

        newUser
        .save()
        .then((user) =>{
            res.send(user);
        })
        .catch((err) =>{
            console.log(err);
            res.send(err);
        })
    }
});

router.post('/login', passport.authenticate('local', {failureRedirecct: '/login'}), (req, res) =>{
    if(req.isAuthenticated()){
        let data = {
            //?????????????where is user from
            token:req.user.generateToken(),
            username: req.user.username,
            admin:req.user.admin
        }
        res.send(data);
    }else{
        res.send('you are not authenticated!');
    }
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then((users) =>{
      res.send(users);
  })
  .catch((err) =>{
      res.send(err);
  })
});

export default router;
