"use strict";
var mongodb = require('mongodb');
var express = require('express');
var celebsMovies_1 = require('../models/celebsMovies');
var ObjectId = mongodb.ObjectID;
var clebesMoviesRoute = express.Router();
clebesMoviesRoute.get('/', function (req, res) {
    celebsMovies_1.default.find()
        .then(function (clebesMovies) {
        res.send(clebesMovies);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
clebesMoviesRoute.get('/id', function (req, res) {
    celebsMovies_1.default.findById(req.params['id'])
        .then(function (clebesMovies) {
        res.send(clebesMovies);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
clebesMoviesRoute.post('/', function (req, res) {
    var celebsMovies = new celebsMovies_1.default();
    celebsMovies.movieId = req.body.movieId;
    celebsMovies.celebId = req.body.celebId;
    celebsMovies.save()
        .then(function (celebsMovies) {
        res.status(201).send(celebsMovies);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = clebesMoviesRoute;
