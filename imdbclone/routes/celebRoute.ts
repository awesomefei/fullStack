import * as express from 'express';
import * as mongodb from 'mongodb';
import Celeb from '../models/celeb';
import Comment from '../models/comment';
import Movie from '../models/movie';

let ObjectId = mongodb.ObjectID;
let celebRoute = express.Router();

celebRoute.get('/', (req, res) =>{
    Celeb.find()
    //.populate('comments')
    .then((celebs) =>{
        res.send(celebs);
    })
    .catch((err) =>{
        res.status(404).send(err);
    });
});

celebRoute.get('/:id', (req, res) =>{
    let data:any = {};

    Celeb.findById(req.params['id'])
    .then((celeb) =>{
        // data.id=celeb.id;
        // data.imageUrl= celeb.imageUrl;
        // data.career = celeb.career;
        // data.website = celeb.website;
        // data.spouse = celeb.spouse;
        // data.agent = celeb.agent;
        // data.lastName = celeb.lastName;
        // data.firstName = celeb.firstName;
        // data.like = celeb.like;
        // data.dislike = celeb.dislike;

        data.celeb = celeb;

        Movie.find({celebs:req.params['id']})
        .then((movies) =>{
            //res.send(movies);
            data.movies=movies;

            res.send(data)
        })
        .catch((err) =>{
            res.status(404).send(err);
        })
    })
    .catch((err) =>{
        res.status(404).send(err);
    });


    // Celeb.findById(req.params['id'])
    // .populate('comments')
    // .then((celeb) =>{
    //     res.send(celeb)
    // })
    // .catch((err) =>{
    //     res.status(404).send(err)
    // });
});

celebRoute.put('/', (req, res) =>{
    Celeb.findByIdAndUpdate(req.body._id, req.body)
    .then((celeb) =>{
        res.status(201).send(celeb);
    })
    .catch((err) =>{
        res.status(404).send({err:err});
    });
});

celebRoute.post('/', (req, res) =>{
    let celeb = new Celeb();

    celeb.firstName = req.body.firstName;
    celeb.lastName = req.body.lastName;
    celeb.agent = req.body.agent;
    celeb.spouse = req.body.spouse;
    celeb.website = req.body.website;
    celeb.career = req.body.career;
    celeb.imageUrl = req.body.imageUrl;
    celeb.like=req.body.like;
    celeb.dislike = req.body.dislike;

    celeb.save()
    .then((celeb) =>{
        res.status(201).send(celeb)
    })
    .catch((err) =>{
        res.status(400).send(err)
    });
});




export default celebRoute;
