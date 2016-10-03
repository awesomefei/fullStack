import * as mongodb from 'mongodb';
import * as express from 'express';
import CelebsMovies from '../models/celebsMovies';

let ObjectId = mongodb.ObjectID;
let clebesMoviesRoute = express.Router();

clebesMoviesRoute.get('/', (req, res) =>{
    CelebsMovies.find()
    .then((clebesMovies) =>{
        res.send(clebesMovies);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
});

clebesMoviesRoute.get('/id', (req, res) =>{
    CelebsMovies.findById(req.params['id'])
    .then((clebesMovies) =>{
        res.send(clebesMovies);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
});
clebesMoviesRoute.post('/', (req, res) =>{
    let celebsMovies = new CelebsMovies();
    celebsMovies.movieId = req.body.movieId;
    celebsMovies.celebId = req.body.celebId;

    celebsMovies.save()
    .then((celebsMovies) =>{
        res.status(201).send(celebsMovies);
    })
    .catch((err) =>{
        res.status(400).send(err);
    })


})


export default clebesMoviesRoute;
