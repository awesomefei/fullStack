import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';

let foodRouter = express.Router();

let ObjectId = mongodb.ObjectID;

foodRouter.get('/', (req,res) =>{
    database.db.collection('foods').find().toArray()
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
    database.db.collection('foods').findOne({_id:foodId})
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
        database.db.collection('foods').update({_id:foodId}, req.body, {upsert:false})
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
    if(req.body.name && req.body.price && req.body.url){
        database.db.collection('foods').save(req.body)
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

foodRouter.delete('/:id', (req,res) =>{
    let foodId = new ObjectId(req.params['id']);
    if(req.params['id']){
        database.db.collection('foods').deleteOne({_id:foodId})
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
