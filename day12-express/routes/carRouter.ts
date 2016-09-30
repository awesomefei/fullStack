import * as express from 'express';

let cars = [
    {id:1,year:'2000', make:'Honda', model:"I"},
    {id:2,year:'1111', make:'Toyota', model:"Do"},
    {id:3,year:'3333', make:'Benz', model:"NOT"},
    {id:4,year:'1212', make:'BMW', model:"Know"}

]
let idCount = 6;
//create ann= express router object
let carRouter = express.Router();
carRouter.get(       '/',         (req, res) =>{
    res.send(cars);
});
carRouter.get(       '/:id',      (req, res) =>{
    let carId = req.params['id'];

    let car = cars.filter((e)=>{
        return e['id'] == carId;
    })[0];
    res.send(car);
});
carRouter.post(       '/save',       (req, res) =>{
    req.body.id = idCount++;
    //idCount++;
    cars.push(req.body);
    res.sendStatus(201);
});

carRouter.post('/edit', (req,res)=>{
    let car = cars.filter((e)=>{
        return e['id'] == req.body.id;
    })[0];
    cars[cars.indexOf(car)] = req.body;
    res.sendStatus(200);
});
carRouter.delete(     '/:id',      (req, res) =>{
    let movieToDelete = cars. filter((elm)=>{
        return elm['id'] == req.params['id'];
    })[0];
    cars.splice(cars.indexOf(movieToDelete), 1);
    res.sendStatus(200);
});

export default carRouter;
