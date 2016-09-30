import * as express from 'express';
import Hero from '../models/heros';

let heroRoute = express.Router();


heroRoute.get('/', (req,res) =>{
    Hero.find()
    .then((heros) =>{
        res.send(heros);
    })
    .catch((err) =>{
        res.status(500).send({err:err});
    })
})

heroRoute.get('/:id', (req,res) =>{
    Hero.findById(req.params['id'])
    .then((hero) =>{
        res.send(hero);
    })
    .catch((err) =>{
        res.status(500).send({err:err});
    })
})

heroRoute.put('/', (req,res) =>{
    Hero.findByIdAndUpdate(req.body._id, req.body)
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(400);
    })
})

heroRoute.post('/', (req,res) =>{
    let hero = new Hero();
    hero.name = req.body.name;
    hero.age = req.body.age;

    hero.save()
    .then((hero) =>{
        res.status(201).send(hero);
    })
    .catch((err) =>{
        res.status(400).send({err:err});
    })
});


heroRoute.delete('/', (req,res) =>{
    Hero.findByIdAndRemove(req.body._id, req.body)
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(404);
    })
})
export default heroRoute;
