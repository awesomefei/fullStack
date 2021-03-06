"use strict";
var express = require('express');
var mongodb = require('mongodb');
var tag_1 = require('../models/tag');
var ObjectId = mongodb.ObjectID;
var tagRoute = express.Router();
tagRoute.get('/', function (req, res) {
    tag_1.default.find()
        .populate('movies')
        .then(function (tags) {
        res.send(tags);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
tagRoute.get('/:id', function (req, res) {
    tag_1.default.findById(req.params['id'])
        .populate('movies')
        .then(function (tag) { return [
        res.send(tag)
    ]; })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
tagRoute.post('/addmovie/:tagId', function (req, res) {
    console.log('-----------------------');
    var tagId = new ObjectId(req.params['tagId']);
    var movieId = new ObjectId(req.body.movieId);
    console.log(tagId);
    console.log(movieId);
    tag_1.default.update({ _id: tagId }, { $push: { movies: movieId } })
        .then(function (tag) {
        console.log(tag);
        res.sendStatus(201);
    })
        .catch(function (err) {
        res.sendStatus(400).send(err);
    });
});
tagRoute.post('/', function (req, res) {
    var tag = new tag_1.default();
    tag.item = req.body.item;
    tag.save()
        .then(function (tag) {
        res.status(201).send(tag);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tagRoute;
