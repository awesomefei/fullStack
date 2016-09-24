import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';

let ObjectId = mongodb.ObjectID;

let countryRouter = express.Router();

countryRouter.get('/', (req, res) =>{
    database.db.collection('countries').find().toArray()
    .then((countries) =>{
        res.send(countries);
    })
    .catch((err) =>{
        console.log(err);
    })
});

countryRouter.get('/:id',(req, res) =>{
    let countryId = new ObjectId(req.params['id']);
    database.db.collection('countries').findOne({_id : countryId})
    .then((country) =>{
        res.send(country);
    })
    .catch((err) => {
        res.sendStatus(400);
    })
});

countryRouter.post('/', (req, res) =>{
    if(req.body.country && req.body.location && req.body.phone){
        database.db.collection('countries').save(req.body)
        .then(() =>{
            res.sendStatus(201);
        })
        .catch(() =>{
            res.sendStatus(500);
        })
    }else{
        res.sendStatus(400);
    }
});

countryRouter.put('/', (req, res) =>{
    let countryId = new ObjectId(req.body._id);
    req.body._id = countryId;
        if(req.body.country && req.body.location && req.body.phone){
            database.db.collection('countries').update({_id:countryId}, req.body, {upsert:false})
            .then(() =>{
                res.sendStatus(201);
            })
            .catch(() =>{
                res.sendStatus(500);
            })
        }else{
            res.sendStatus(400);
        }
});

countryRouter.delete('/:id', (req, res) =>{
    let countryId = new ObjectId(req.params['id']);
    if(req.params['id']){
        database.db.collection('countries').deleteOne({_id: countryId})
        .then(() =>{
            res.send(201);
        })
        .catch(() =>{
            res.sendStatus(500);
        })
    }else{
        res.sendStatus(400);
    }
})


export default countryRouter;
