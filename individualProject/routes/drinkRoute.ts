import * as express from 'express';
import * as mongodb from 'mongodb';
import Drink from '../models/drink';

let drinkRoute = express.Router();
let ObjectId = mongodb.ObjectID;

drinkRoute.get('/' , (req, res) =>{
    Drink.find()
    .then((drinks) =>{
        console.log('!!!!!!!!!!!!!!!!');
        res.send(drinks);
    })
    .catch((err) =>{
        res.send(err);
    })
})

drinkRoute.get('/:id',(req, res) =>{
    let drinkId = new ObjectId(req.params['id']);
    Drink.findOne({_id:drinkId})
    .then((drink) =>{
        res.send(drink);
    })
    .catch((err) =>{
        res.sendStatus(400);
    })
})

drinkRoute.post('/', (req, res) =>{
    let drink = new Drink();
    drink.name = req.body.name;
    console.log(req.body.name);
    drink.price = req.body.price;
    drink.detail = req.body.detail;
    drink.url = req.body.url;
    drink.save()
    .then((movie) =>{
        res.status(201).send(movie);
    })
    .catch(()=>{
        res.sendStatus(404);
    });
});

drinkRoute.put('/', (req, res) =>{
    console.log('drinkRoute');
    console.log(req.body);
    Drink.findByIdAndUpdate(req.body._id, req.body)
    .then((drink) =>{
        res.send(drink);
    })
    .catch((err) =>{
        res.send(err);
    });
});

drinkRoute.delete('/:id', (req, res) =>{
    Drink.findByIdAndRemove(req.params['id'])
    .then(() =>{
        res.sendStatus(200);
    })
    .catch((err) =>{
        res.status(400).send(err);
    });
});

export default drinkRoute;
