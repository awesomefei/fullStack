import * as mongodb from 'mongodb';
import * as express from 'express';
import HomeMovie from '../models/homeMovie';
import Director from '../models/director';

let ObjectId = mongodb.ObjectID;
let directorRoute = express.Router();

directorRoute.get('/', (req, res) =>{
    Director.find()
    .populate('knownFor')
    .then((directors) =>{
        res.send(directors);
    })
    .catch((err) =>{
        res.send(err);
    });
});

directorRoute.get('/:id', (req, res) =>{
    Director.findById(req.params['id'])
    .populate('knownFor')
    .then((director) =>{
        res.send(director);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
})

directorRoute.post('/', (req, res) =>{
    let director = new Director;
    director.name = req.body.name;
    director.imageUrl = req.body.imageUrl;
    director.agent = req.body.agent;
    director.career = req.body.career;
    director.website = req.body.website;

    director.save()
    .then((director) =>{
        res.status(201).send(director);
    })
    .catch((err) =>{
        res.status(400).send(err);
    });

});

directorRoute.delete('/id', (req,res) =>{
    Director.findByIdAndRemove(req.params['id'])
    .then(() =>{
        res.sendStatus(200)
    }).catch(() =>{
        res.sendStatus(404);
    });
});















export default directorRoute;
