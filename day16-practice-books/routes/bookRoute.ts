import * as express from 'express';
import Book from '../models/books'
import * as mongodb from 'mongodb';

let ObjectId = mongodb.ObjectID;

let bookRoute = express.Router();

bookRoute.get('/', (req, res) =>{
    Book.find()
    .populate('authors')
    .then((books) =>{
        res.send(books);
    })
    .catch((err) =>{
        res.status(500).send({err:err});
    })
});


bookRoute.get('/:id', (req,res) =>{
    Book.findById(req.params['id'])
    .populate('authors')
    .then((book) =>{

        res.send(book);
    })
    .catch((err) =>{
        res.status(500).send({err:err});
    })
});

bookRoute.put('/', (req,res) =>{
    Book.findByIdAndUpdate(req.body._id, req.body)
    .then(()=>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(500);
    })
});

bookRoute.delete('/:id', (req, res) =>{
    Book.findByIdAndRemove(req.params['id'])
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(500);
    })
});

bookRoute.post('/', (req, res) =>{
    let book = new Book();
    book.title = req.body.title;
    book.price = req.body.price;

    book.save()
    .then((book) =>{
        res.status(200).send(book);
    })
    .catch((err) =>{
        res.status(400).send({err:err});
    })
});

bookRoute.post('/addAuthor/:bookId', (req, res) =>{
    let bookId = new ObjectId(req.params['bookId']);
    let authorId = new ObjectId(req.body.authorId);

    Book.update({_id: bookId}, {$push: {authors:authorId}})
    .then((book) =>{
        res.send(book);
    })
    .catch((err) =>{
        res.status(500).send(err);
    })
});


export default bookRoute;
