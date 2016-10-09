"use strict";
var express = require('express');
var mongodb = require('mongodb');
var food_1 = require('../models/food');
var foodRouter = express.Router();
var ObjectId = mongodb.ObjectID;
foodRouter.get('/', function (req, res) {
    food_1.default.find()
        .then(function (foods) {
        console.log('get foods');
        res.send(foods);
    })
        .catch(function (err) {
        console.log(err);
    });
});
foodRouter.get('/:id', function (req, res) {
    var foodId = new ObjectId(req.params['id']);
    food_1.default.findOne({ _id: foodId })
        .then(function (food) {
        res.send(food);
    })
        .catch(function (err) {
        res.sendStatus(400);
    });
});
foodRouter.put('/', function (req, res) {
    var foodId = new ObjectId(req.body._id);
    req.body._id = foodId;
    if (req.body.name && req.body.price && req.body.url) {
        food_1.default.update({ _id: foodId }, req.body, { upsert: false })
            .then(function () {
            res.sendStatus(201);
        })
            .catch(function (err) {
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(400);
    }
});
foodRouter.post('/', function (req, res) {
    var food = new food_1.default();
    food.name = req.body.name;
    food.price = req.body.price;
    food.url = req.body.url;
    food.save()
        .then(function (food) {
        res.status(201).send(food);
    })
        .catch(function (err) {
        res.sendStatus(500);
    });
});
foodRouter.delete('/:id', function (req, res) {
    var foodId = new ObjectId(req.params['id']);
    if (req.params['id']) {
        food_1.default.findByIdAndRemove({ _id: foodId })
            .then(function () {
            res.sendStatus(200);
        })
            .catch(function () {
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(400);
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = foodRouter;
