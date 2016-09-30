import * as express from 'express';
import * as mongodb from 'mongodb';
import Celeb from '../models/celeb';
import Comment from '../models/comment';

let ObjectId = mongodb.ObjectID;
let celebRoute = express.Router();

celebRoute.get('/', (req, res) =>{
    Celeb.find()
    //.populate('comments')
    .then((celebs) =>{
        res.send(celebs);
    })
    .catch((err) =>{
        res.status(404).send(err);
    });
});

celebRoute.get('/:id', (req, res) =>{
    Celeb.findById(req.params['id'])
    //.populate('comments')
    .then((celeb) =>{
        res.send(celeb)
    })
    .catch((err) =>{
        res.status(404).send(err)
    });
});

celebRoute.put('/', (req, res) =>{
    Celeb.findByIdAndUpdate(req.body._id, req.body)
    .then((celeb) =>{
        res.status(201).send(celeb);
    })
    .catch((err) =>{
        res.status(404).send({err:err});
    });
});

celebRoute.post('/', (req, res) =>{
    let celeb = new Celeb();

    celeb.firstName = req.body.firstName;
    celeb.lastName = req.body.lastName;
    celeb.agent = req.body.agent;
    celeb.spouse = req.body.spouse;
    celeb.website = req.body.website;
    celeb.career = req.body.career;
    celeb.imageUrl = req.body.imageUrl;
    celeb.like=req.body.like;
    celeb.dislike = req.body.dislike;

    celeb.save()
    .then((celeb) =>{
        res.status(201).send(celeb)
    })
    .catch((err) =>{
        res.status(400).send(err)
    });
});




export default celebRoute;
