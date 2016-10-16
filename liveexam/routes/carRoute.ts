import * as express from 'express';
import Car from '../models/car';

let carRoute = express.Router();

carRoute.get('/', (req, res) =>{
    Car
    .find()
    .then((cars) =>{
        res.send(cars);
    })
    .catch((err) =>{
        res.send(err);
    })
})
export default carRoute;
