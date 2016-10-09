import * as express from 'express';
import * as mongodb from 'mongodb';
import Food from '../models/food'

let foodRouter = express.Router();
let ObjectId = mongodb.ObjectID;

foodRouter.get('/', (req,res) =>{
    Food.find()
    .then((foods) =>{
        console.log('get foods');
        res.send(foods);
    })
    .catch((err) =>{
        console.log(err);
    })
});

foodRouter.get('/:id', (req,res) =>{
    let foodId = new ObjectId(req.params['id']);
    Food.findOne({_id:foodId})
    .then((food) =>{
        res.send(food);
    })
    .catch((err) =>{
        res.sendStatus(400);
    })
});

foodRouter.put('/', (req,res) =>{
    let foodId = new ObjectId(req.body._id)
    req.body._id = foodId;
    if(req.body.name && req.body.price && req.body.url){
        Food.update({_id:foodId}, req.body, {upsert:false})
        .then(() =>{
            res.sendStatus(201);
        })
        .catch((err) =>{
            res.sendStatus(500);
        })
    }else{
        res.sendStatus(400);
    }
});

foodRouter.post('/', (req,res) =>{
    let food = new Food();
    food.name = req.body.name;
    food.price = req.body.price;
    food.url = req.body.url;
        food.save()
        .then((food) =>{
            res.status(201).send(food);
        })
        .catch((err) =>{
            res.sendStatus(500);
        })

});

foodRouter.delete('/:id', (req,res) =>{
    let foodId = new ObjectId(req.params['id']);
    if(req.params['id']){
        Food.findByIdAndRemove({_id:foodId})
        .then(() =>{
            res.sendStatus(200);
        })
        .catch(() =>{
            res.sendStatus(500);
        })
    }else{
        res.sendStatus(400);
    }
});



export default foodRouter;
