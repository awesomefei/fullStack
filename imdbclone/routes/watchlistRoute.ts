import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import Movie from '../models/movie';

let watchlistRoute = express.Router();

watchlistRoute.get('/', (req, res) =>{
    Movie
    .find()
    .then((movies) =>{
        res.send(movies);
    })
    .catch((err) =>{
        res.send(err);
    })
});

function authorize(req, res, next){
    let token = req['token'];
    console.log(token);
    jwt.verify(token, 'SuperSecret', function(err, decoded){
        if(err){
            res.sendStatus(401);
        }else{
            console.log(decoded);
            next();
        }
    });
}

function adminOnly(req, res, next){
    let token = req['token'];
    jwt.verify(token, 'SuperSecret', function(err, decoded){
        if(err || !decoded.admin){
            res.sendStatus(401);
        }else{
            next();
        }
    });
}

export default watchlistRoute;
