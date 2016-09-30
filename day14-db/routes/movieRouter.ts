import * as express from 'express';
import database from '../db';
import * as maogodb from 'mongodb';
//mongodb stuff
let ObjectId = maogodb.ObjectID;
//create router object
let movieRouter = express.Router();

class Movie{
    constructor (public title, public director){
    }
}
//GET movies
movieRouter.get('/', (req,res) =>{
    database.db.collection('movies').find().toArray()
    .then((movies)=>{
        res.send(movies);
    })
    .catch((err) =>{
        console.log(err);
    })
});
//GET single movie
movieRouter.get('/:id', (req, res) =>{
    let movieId = new ObjectId(req.params['id']);
    database.db.collection('movies').findOne({_id:movieId})
    .then((movie) =>{
        res.send(movie);
    })
    .catch((err) =>{
        res.sendStatus(400);
    })
});
//POST movie
movieRouter.post('/', (req, res) =>{

    if(req.body.title && req.body.director){
        let movie = new Movie(req.body.title, req.body.director);
        database.db.collection('movies').save(movie)
        .then(() =>{
            res.sendStatus(201);
        })
        .catch((err) =>{
            res.status(500).send(err);
        })
    }else{
        res.sendStatus(400);
    }
});
//Edit movie
movieRouter.put('/', (req, res) =>{
    let movieId = new ObjectId(req.body._id);
    req.body._id = movieId;
    if(req.body.title && req.body.director){
        database.db.collection('movies').update({_id : movieId}, req.body,{upsert:false})
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

movieRouter.delete('/:id', (req, res) =>{
    let movieId = new ObjectId(req.params['id']);
    if(req.params['id']){
        database.db.collection('movies').deleteOne({_id:movieId })
        .then(() =>{
            res.sendStatus(200);
        })
        .catch(() =>{
            res.sendStatus(500);
        })
        }else{
            res.sendStatus(500);
        }
    });



export default movieRouter;
