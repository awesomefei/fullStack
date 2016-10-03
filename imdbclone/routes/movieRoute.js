"use strict";
var express = require('express');
var mongodb = require('mongodb');
var movie_1 = require('../models/movie');
var comment_1 = require('../models/comment');
var ObjectId = mongodb.ObjectID;
var movieRoute = express.Router();
movieRoute.get('/', function (req, res) {
    movie_1.default.find()
        .populate('comments celebs')
        .then(function (movies) {
        res.send(movies);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
movieRoute.get('/:id', function (req, res) {
    movie_1.default.findById(req.params['id'])
        .populate('comments celebs')
        .then(function (movie) {
        res.send(movie);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
movieRoute.post('/', function (req, res) {
    var movie = new movie_1.default();
    movie.title = req.body.title;
    movie.introduction = req.body.introduction;
    movie.rate = req.body.rate;
    movie.url = req.body.url;
    movie.trailerUrl = req.body.trailerUrl;
    movie.save()
        .then(function (movie) {
        res.status(201).send(movie);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
movieRoute.post('/comments/:movieId', function (req, res) {
    var movieId = new ObjectId(req.params['movieId']);
    var comment = new comment_1.default();
    comment.message = req.body.message;
    comment.timeCreate = new Date();
    comment.save()
        .then(function (comment) {
        var commentId = new ObjectId(comment._id);
        movie_1.default.update({ _id: movieId }, { $push: { comments: commentId } })
            .then(function () {
            res.sendStatus(201);
        })
            .catch(function () {
            res.sendStatus(404);
        });
    })
        .catch(function () {
        res.sendStatus(400);
    });
});
movieRoute.post('/addcelebs/:movieId', function (req, res) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
    var movieId = new ObjectId(req.params['movieId']);
    var celebId = new ObjectId(req.body.celebId);
    console.log("celebId:" + celebId + ' ');
    console.log("movieId: " + movieId);
    movie_1.default.update({ _id: movieId }, { $push: { celebs: celebId } })
        .then(function (movie) {
        res.sendStatus(201);
    })
        .catch(function (err) {
        res.sendStatus(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = movieRoute;
