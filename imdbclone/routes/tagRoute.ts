import * as express from 'express';
import * as mongodb from 'mongodb';
import Tag from '../models/tag';

let ObjectId = mongodb.ObjectID;
let tagRoute = express.Router();

tagRoute.get('/',(req, res) =>{
    Tag.find()
    .then((tags) =>{
        res.send(tags);
    })
    .catch((err) =>{
        res.status(404).send(err);
    });
});

tagRoute.get('/:id',(req, res) =>{
    Tag.findById(req.params['id'])
    .then((tag) =>[
        res.send(tag)
    ])
    .catch((err) =>{
        res.status(404).send(err);
    });
});

tagRoute.post('/', (req, res) =>{
    let tag = new Tag();
    tag.item = req.body.item;
    tag.save()
    .then((tag) =>{
        res.status(201).send(tag);
    })
    .catch((err) =>{
        res.status(400).send(err);
    })
});

export default tagRoute;
