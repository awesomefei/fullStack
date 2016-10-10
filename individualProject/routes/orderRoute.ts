import * as express from 'express';
import * as mongodb from 'mongodb';
import Order from '../models/order';
import * as jwt from 'jsonwebtoken';
import Food from '../models/food';

let ObjectId = mongodb.ObjectID;
let orderRoute = express.Router();

orderRoute.get('/', authorize, (req, res) =>{
    Order.find()
    .populate('foods')
    .then((orders) =>{

        res.send(orders);
    })
    .catch((err) =>{
        res.send(err);
    })
})

orderRoute.post('/', authorize,(req,res) =>{
    let order = new Order();
    order.date = new Date();
    order.state = req.body.state;

    order.save()
        .then((order) =>{
            res.status(201).send(order);
        })
        .catch((err) =>{
        res.status(400).send(err);
    });
});

orderRoute.post('/addfood/:orderId', (req, res) =>{
    let orderId = new ObjectId(req.params['orderId']);
    let foodId = new ObjectId(req.body.foodId);

    Order.update({_id:orderId}, {$push:{foods:foodId}})

    .then((order) =>{
        console.log(this.foods);
        res.sendStatus(201);
    })
    .catch((err) =>{
        res.sendStatus(400).send(err);
    })



})


function authorize(req,res,next){
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!! order router');
    let token = req['token'];
    console.log(token);

    jwt.verify(token,'SuperSecret', function(err, decoded){
        if(err ){
            res.sendStatus(401);
        }else{
            console.log(decoded);
            next();
        }
    });
}

function adminOnly(req, res, next){
    let token =req['token'];
    jwt.verify(token, 'SuperSecret', function(err, decoded){
        if(err || !decoded.admin){
            res.sendStatus(401);
        }else{
            next();
        }
    });
}
export default orderRoute;
