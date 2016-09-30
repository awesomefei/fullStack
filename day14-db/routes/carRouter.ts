import * as express from 'express';
import database from '../db';
import * as maogodb from 'mongodb';

let ObjectId = maogodb.ObjectID;
let carRouter = express.Router();

carRouter.get('/', (req, res) =>{
    database.db.collection('cars').find().toArray()
    .then((cars) =>{
        res.send(cars);
    })
    .catch((err) =>{
        console.log(err);
    })
})

carRouter.get('/:id', (req, res) =>{
    let carId = new ObjectId(req.params['id']);
    database.db.collection('cars').findOne({_id:carId})
    .then((car) =>{
        res.send(car);
    })
    .catch((err) => {
        res.sendStatus(400);
    })
});


carRouter.post('/', (req, res) =>{
    if(req.body.make && req.body.year && req.body.price){
         database.db.collection('cars'). save(req.body)
         .then(() =>{
             res.sendStatus(201);
         })
         .catch((err) =>{
             res.status(500).send(err);
         });
    }else{
        res.sendStatus(400);
    }
});

carRouter.put('/', (req, res) =>{
    let carId = new ObjectId(req.body._id);
    req.body._id = carId;
    if(req.body.make && req.body.year && req.body.price){
        database.db.collection('cars').update({_id:carId}, req.body, {upsert:false})
        .then(() =>{
            res.sendStatus(200);
        })
            .catch((err)=>{
                res.sendStatus(500);
            });
        }else{
            res.sendStatus(400);
        }
});

carRouter.delete('/:id', (req,res) =>{
    let carId = new Object(req.params['id']);
    if(req.params['id']){
        database.db.collection('cars').deleteOne({_id: carId})
        .then(() =>{
            res.sendStatus(200);
        })
        .catch(() =>{
            res.sendStatus(500);
        });
    }else{
        res.sendStatus(500);
    }
});


export default carRouter;
