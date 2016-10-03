import * as mongodb from 'mongodb';
import * as express from 'express';
import CelebsMovies from '../models/celebsMovies';

let ObjectId = mongodb.ObjectID;
let clebesMoviesRoute = express.Router();

clebesMoviesRoute.get('/', (req, res) =>{
    CelebsMovies.find()
    .then((clebesMovies) =>{
        
    })
});

export default clebesMoviesRoute;
