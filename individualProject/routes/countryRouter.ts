import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
import Country from '../models/contry';

let ObjectId = mongodb.ObjectID;
let countryRouter = express.Router();

countryRouter.get('/', (req, res) =>{
    Country.find()
    .then((countries) =>{
        res.send(countries);
    })
    .catch((err) =>{
        console.log(err);
    })
});

countryRouter.get('/:id',(req, res) =>{
    let countryId = new ObjectId(req.params['id']);
    Country.findOne({_id : countryId})
    .then((country) =>{
        res.send(country);
    })
    .catch((err) => {
        res.sendStatus(400);
    })
});

countryRouter.post('/', (req, res) =>{
    let country = new Country();
    country.location = req.body.location;
    country.phone = req.body.phone;

    country.save()
    .then((food) =>{
        res.status(201).send(food)
    })
    .catch((err) =>{
        res.sendStatus(500);
    })
});

countryRouter.put('/', (req, res) =>{
    let countryId = new ObjectId(req.body._id);
    req.body._id = countryId;
        if(req.body.country && req.body.location && req.body.phone){
            Country.update({_id:countryId}, req.body, {upsert:false})
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
        Country.findByIdAndRemove({_id: countryId})
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
