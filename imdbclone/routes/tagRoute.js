"use strict";
var express = require('express');
var mongodb = require('mongodb');
var tag_1 = require('../models/tag');
var ObjectId = mongodb.ObjectID;
var tagRoute = express.Router();
tagRoute.get('/', function (req, res) {
    tag_1.default.find()
        .then(function (tags) {
        res.send(tags);
    })
        .catch(function (err) {
        res.status(404).send(err);
    });
});
tagRoute.get('/:id', function (req, res) {
    tag_1.default.findById(req.params['id'])
        .then(function (tag) { return [
        res.send(tag)
    ]; })
        .catch(function (err) {
        res.status(404).send(err);
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
