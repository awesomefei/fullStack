"use strict";
var express = require('express');
var mongodb = require('mongodb');
var drink_1 = require('../models/drink');
var drinkRoute = express.Router();
var ObjectId = mongodb.ObjectID;
drinkRoute.get('/', function (req, res) {
    drink_1.default.find()
        .then(function (drinks) {
        console.log('!!!!!!!!!!!!!!!!');
        res.send(drinks);
    })
        .catch(function (err) {
        res.send(err);
    });
});
drinkRoute.get('/:id', function (req, res) {
    var drinkId = new ObjectId(req.params['id']);
    drink_1.default.findOne({ _id: drinkId })
        .then(function (drink) {
        res.send(drink);
    })
        .catch(function (err) {
        res.sendStatus(400);
    });
});
drinkRoute.post('/', function (req, res) {
    var drink = new drink_1.default();
    drink.name = req.body.name;
    drink.price = req.body.price;
    drink.detail = req.body.detail;
    drink.url = req.body.url;
    drink.save()
        .then(function (movie) {
        res.status(201).send(movie);
    })
        .catch(function () {
        res.sendStatus(404);
    });
});
drinkRoute.put('/', function (req, res) {
    drink_1.default.findByIdAndUpdate(req.body._id, req.body)
        .then(function (drink) {
        res.send(drink);
    })
        .catch(function (err) {
        res.send(err);
    });
});
drinkRoute.delete('/:id', function (req, res) {
    drink_1.default.findByIdAndRemove(req.params['id'])
        .then(function () {
        res.sendStatus(200);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = drinkRoute;
