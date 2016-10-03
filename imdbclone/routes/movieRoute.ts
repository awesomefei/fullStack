import * as express from 'express';
import * as mongodb from 'mongodb';
import Movie from '../models/movie';
import Comment from '../models/comment';
import Celeb from '../models/celeb';

let ObjectId = mongodb.ObjectID;
let movieRoute = express.Router();


movieRoute.get('/', (req, res) =>{
    Movie.find()
    .populate('comments celebs')

    .then((movies) =>{
        res.send(movies);
    })
    .catch((err) =>{
        res.status(404).send(err);
    });

});

movieRoute.get('/:id', (req, res) =>{
    Movie.findById(req.params['id'])
    .populate('comments celebs')

    .then((movie) =>{
        res.send(movie);
    })
    .catch((err) =>{
        res.status(404).send(err);
    });
});

movieRoute.post('/', (req,res) =>{
    let movie = new Movie();
    movie.title = req.body.title;
    movie.introduction = req.body.introduction;
    //movie.timeReleased = req.body.timeReleased;
    movie.rate = req.body.rate;
    movie.url = req.body.url;
    movie.trailerUrl = req.body.trailerUrl;

    movie.save()
    .then((movie) =>{
        res.status(201).send(movie);
    })
    .catch((err) =>{
        res.status(400).send(err);
    });
});

movieRoute.post('/comments/:movieId', (req, res) =>{
    let movieId = new ObjectId(req.params['movieId']);
    let comment = new Comment();
    comment.message = req.body.message;
    comment.timeCreate = new Date();

    comment.save()
        .then((comment) =>{
            let commentId = new ObjectId(comment._id);
            Movie.update({_id:movieId}, {$push: { comments:commentId }})
            .then(() =>{
                res.sendStatus(201);
            })
            .catch(() =>{
                res.sendStatus(404);
            });
        })
        .catch(() =>{
            res.sendStatus(400);
        });

});
// movieRoute.get('/celebs/:movieId', (req,res) =>{
//     .find()
//     .then((celebs) =>{
//         res.send(celebs);
//     })
//     .catch((err) =>{
//         res.status(404).send(err);
//     });
//
// });

movieRoute.post('/addcelebs/:movieId', (req, res) =>{
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
    let movieId = new ObjectId(req.params['movieId']);
    let celebId = new ObjectId(req.body.celebId);

    Movie.update({_id:movieId}, {$push:{celebs:celebId}})

    .then((movie) =>{
        console.log(this.celebs);
        res.sendStatus(201);
    })
    .catch((err) =>{
        res.sendStatus(400).send(err);
    });
});


export default movieRoute;
