"use strict";
var express = require('express');
var mongodb = require('mongodb');
var homeMovie_1 = require('../models/homeMovie');
var comment_1 = require('../models/comment');
var ObjectId = mongodb.ObjectID;
var homeMovieRoute = express.Router();
homeMovieRoute.get('/', function (req, res) {
    homeMovie_1.default.find()
        .populate('celebs')
        .populate('comments')
        .populate('direcor')
        .then(function (homeMovies) {
        res.send(homeMovies);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
homeMovieRoute.get('/:id', function (req, res) {
    homeMovie_1.default.findById(req.params['id'])
        .populate('celebs')
        .populate('comments')
        .populate('direcor')
        .then(function (homeMovie) {
        console.log("celebs : " + homeMovie.celebs);
        res.send(homeMovie);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
homeMovieRoute.post('/', function (req, res) {
    var homeMovie = new homeMovie_1.default;
    homeMovie.title = req.body.title;
    homeMovie.introduction = req.body.introduction;
    homeMovie.trailerUrl = req.body.trailerUrl;
    homeMovie.rate = req.body.rate;
    homeMovie.imageUrl = req.body.imageUrl;
    homeMovie.save()
        .then(function (homeMovie) {
        res.status(201).send(homeMovie);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
homeMovieRoute.delete('/:id', function (req, res) {
    homeMovie_1.default.findByIdAndRemove(req.params['id'])
        .then(function () {
        res.sendStatus(200);
    })
        .catch(function () {
        res.sendStatus(404);
    });
});
homeMovieRoute.put('/', function (req, res) {
    homeMovie_1.default.findByIdAndUpdate(req.body._id, req.body)
        .then(function () {
        res.sendStatus(200);
    })
        .catch(function () {
        res.sendStatus(400);
    });
});
homeMovieRoute.post('/comments/:homeMovieId', function (req, res) {
    var homeMovieId = new ObjectId(req.params['homeMovieId']);
    var comment = new comment_1.default();
    comment.message = req.body.message;
    comment.timeCreate = new Date();
    comment.save()
        .then(function (comment) {
        var commentId = new ObjectId(comment._id);
        homeMovie_1.default.update({ _id: homeMovieId }, { $push: { comments: commentId } })
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
homeMovieRoute.post('/adddirector/:homeMovieId', function (req, res) {
    var homeMovieId = new ObjectId(req.params['homeMovieId']);
    var directorId = new ObjectId(req.body.directorId);
    homeMovie_1.default.update({ _id: homeMovieId }, { $push: { director: directorId } })
        .then(function (homeMovie) {
        res.send(homeMovie);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
homeMovieRoute.post('/addactor/:homeMovieId', function (req, res) {
    var homeMovieId = new ObjectId(req.params['homeMovieId']);
    var actorId = new ObjectId(req.body.actorId);
    homeMovie_1.default.update({ _id: homeMovieId }, { $push: { celebs: actorId } })
        .then(function (homeMovie) {
        res.send(homeMovie);
    })
        .catch(function (err) {
        console.log(err);
        res.status(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = homeMovieRoute;
