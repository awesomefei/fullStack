import * as express from 'express';
import Author from '../models/author';

let authorRoute = express.Router();

authorRoute.get('/', (req,res) =>{
    Author.find()
    .then((authors) =>{
        res.send(authors);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
})

authorRoute.post('/', (req, res) =>{
    let author = new Author();
    author.firstName = req.body.firstName;
    author.lastName = req.body.lastName;
    author.save()
    .then((author) =>{
        res.send(author);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
})


export default authorRoute;
