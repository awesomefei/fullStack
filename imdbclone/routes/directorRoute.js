"use strict";
var mongodb = require('mongodb');
var express = require('express');
var director_1 = require('../models/director');
var ObjectId = mongodb.ObjectID;
var directorRoute = express.Router();
directorRoute.get('/', function (req, res) {
    director_1.default.find()
        .populate('knownFor')
        .then(function (directors) {
        res.send(directors);
    })
        .catch(function (err) {
        res.send(err);
    });
});
directorRoute.get('/:id', function (req, res) {
    director_1.default.findById(req.params['id'])
        .populate('knownFor')
        .then(function (director) {
        res.send(director);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
directorRoute.post('/', function (req, res) {
    var director = new director_1.default;
    director.name = req.body.name;
    director.imageUrl = req.body.imageUrl;
    director.agent = req.body.agent;
    director.career = req.body.career;
    director.website = req.body.website;
    director.save()
        .then(function (director) {
        res.status(201).send(director);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
directorRoute.delete('/id', function (req, res) {
    director_1.default.findByIdAndRemove(req.params['id'])
        .then(function () {
        res.sendStatus(200);
    }).catch(function () {
        res.sendStatus(404);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = directorRoute;
