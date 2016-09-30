import * as express from 'express';
import Movie from '../models/movies';
import * as mongodb from 'mongodb';

let ObjectId = mongodb.ObjectID;

//create a movieRouter
let movieRouter = express.Router();


//Read movies
movieRouter.get('/', (req, res) =>{
    Movie.find()
    .populate('actors')
    //.sort('title')
    .then((movies) =>{
        res.send(movies);
    })
    .catch((err) =>{
        res.status(500).send({err:err});
    })
});

//Read single movies

movieRouter.get('/:id', (req, res) =>{
    Movie.findById(req.params['id'])
    .populate('actors')
    .then((movie) =>{
        res.send(movie);
    })
    .catch((err) =>{
        res.status(500).send({err:err});
    })
})

//uodate
movieRouter.put('/', (req, res) =>{
    let movieId = req.body._id;
    Movie.findById(req.body._id)
    .then((movie) =>{
        //overwrite new infor to existing movie
        movie.title = req.body.title;
        movie.director = req.body.director;

        //save changes
        movie.save()
        .then((movie) =>{
            res.status(200).send(movie);
        })
        .catch((err) =>{
            res.status(500).send({err:err});
        })
    })
    .catch((err) =>{
        res.status(404).send({err:err})
    })
    //Movie.findByIdAndUpdate
})

//delete
movieRouter.delete('/:id', (req, res) =>{
    Movie.findByIdAndRemove(req.params['id'])
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(404);
    })
})


//Create Movie
movieRouter.post('/', (req, res) =>{
    let movie = new Movie();

    movie.title = req.body.title;
    movie.director = req.body.director;

    movie.save()
    .then((movie) =>{
        res.status(201).send(movie);
        // (or)res.send(movie);
    })
    .catch((err) =>{
        res.status(400).send({err:err});
    })
});

//add actor to movie
movieRouter.post('/addactor/:movieId', (req,res) =>{
    let movieId = new ObjectId(req.params['movieId']);
    let actorId = new ObjectId(req.body.actorId);

    Movie.update({_id: movieId}, {$push: {actors: actorId } })
    .then((movie) =>{
        res.send(movie);
    })
    .catch((err) =>{
        res.status(400).send(err);
    })
});




export default movieRouter;
