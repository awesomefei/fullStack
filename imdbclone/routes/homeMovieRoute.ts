import * as express from 'express';
import * as mongodb from 'mongodb';
import HomeMovie from '../models/homeMovie';
import Celeb from '../models/celeb';
import Director from '../models/director';
import Comment from '../models/comment';

let ObjectId = mongodb.ObjectID;
let homeMovieRoute = express.Router();

homeMovieRoute.get('/', (req, res) =>{

    HomeMovie.find()
    .populate('celebs')
    .populate('comments')
    //.populate('direcor')

    .then((homeMovies) =>{
        res.send(homeMovies);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
});

homeMovieRoute.get('/:id', (req, res) =>{
    HomeMovie.findById(req.params['id'])
  // .populate('comments','director','celebs')

    .then((homeMovie) =>{
         console.log("celebs : " + homeMovie.celebs);
        res.send(homeMovie);
    })
    .catch((err) =>{
        res.status(404).send(err);
    })
});

homeMovieRoute.post('/', (req, res) =>{

    let homeMovie = new HomeMovie;
    homeMovie.title = req.body.title;
    homeMovie.introduction = req.body.introduction;
    homeMovie.trailerUrl = req.body.trailerUrl;
    homeMovie.rate =req.body.rate;
    homeMovie.imageUrl = req.body.imageUrl;

    homeMovie.save()
    .then((homeMovie) =>{
        res.status(201).send(homeMovie);
    })
    .catch((err) =>{
        res.status(400).send(err);
    })
});

homeMovieRoute.delete('/:id', (req,res) =>{
    HomeMovie.findByIdAndRemove(req.params['id'])
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(404);
    })
});

homeMovieRoute.put('/', (req, res) =>{
    HomeMovie.findByIdAndUpdate(req.body._id, req.body)
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(400);
    })
})

homeMovieRoute.post('/comments/:homeMovieId', (req, res) =>{
    let homeMovieId = new ObjectId(req.params['homeMovieId']);
    let comment = new Comment();
    comment.message = req.body.message;
    comment.timeCreate = new Date();
    comment.save()
    .then((comment) =>{
        let commentId = new ObjectId(comment._id);
        HomeMovie.update({_id:homeMovieId}, {$push: {comments:commentId}})
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
homeMovieRoute.post('/adddirector/:homeMovieId', (req, res) =>{
    let homeMovieId = new ObjectId(req.params['homeMovieId']);
    let directorId = new ObjectId(req.body.directorId);

    HomeMovie.update({_id:homeMovieId}, {$push:{director:directorId }})
    .then((homeMovie) =>{
        res.send(homeMovie);
    })
    .catch((err) =>{
        res.status(400).send(err);
    })
})

homeMovieRoute.post('/addactor/:homeMovieId', (req, res)=>{
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
    let homeMovieId = new ObjectId(req.params['homeMovieId']);
    let actorId = new ObjectId(req.body.actorId);

    console.log("actorId:" + actorId + ' ');
    console.log("homeMovieId: " + homeMovieId);
    HomeMovie.update({_id:homeMovieId}, {$push:{celebs:actorId}})
    .then((homeMovie) =>{
        console.log("homeMovie befroe send: "+ homeMovie.celebs);
        res.send(homeMovie);
    })
    .catch((err) =>{
        console.log(err);
        res.status(400).send(err);
    })
})



export default homeMovieRoute;
