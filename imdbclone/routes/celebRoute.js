"use strict";
var express = require('express');
var mongodb = require('mongodb');
var celeb_1 = require('../models/celeb');
var movie_1 = require('../models/movie');
var ObjectId = mongodb.ObjectID;
var celebRoute = express.Router();
celebRoute.get('/', function (req, res) {
    celeb_1.default.find()
        .then(function (celebs) {
        res.send(celebs);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
celebRoute.get('/:id', function (req, res) {
    var data = {};
    celeb_1.default.findById(req.params['id'])
        .then(function (celeb) {
        data.celeb = celeb;
        movie_1.default.find({ celebs: req.params['id'] })
            .then(function (movies) {
            data.movies = movies;
            res.send(data);
        })
            .catch(function (err) {
            res.status(404).send(err);
        });
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
celebRoute.put('/', function (req, res) {
    celeb_1.default.findByIdAndUpdate(req.body._id, req.body)
        .then(function (celeb) {
        res.status(201).send(celeb);
    })
        .catch(function (err) {
        res.status(404).send({ err: err });
    });
});
celebRoute.post('/', function (req, res) {
    var celeb = new celeb_1.default();
    celeb.firstName = req.body.firstName;
    celeb.lastName = req.body.lastName;
    celeb.agent = req.body.agent;
    celeb.spouse = req.body.spouse;
    celeb.website = req.body.website;
    celeb.career = req.body.career;
    celeb.imageUrl = req.body.imageUrl;
    celeb.like = req.body.like;
    celeb.dislike = req.body.dislike;
    celeb.save()
        .then(function (celeb) {
        res.status(201).send(celeb);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = celebRoute;
