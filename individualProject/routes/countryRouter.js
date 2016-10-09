"use strict";
var express = require('express');
var mongodb = require('mongodb');
var contry_1 = require('../models/contry');
var ObjectId = mongodb.ObjectID;
var countryRouter = express.Router();
countryRouter.get('/', function (req, res) {
    contry_1.default.find()
        .then(function (countries) {
        res.send(countries);
    })
        .catch(function (err) {
        console.log(err);
    });
});
countryRouter.get('/:id', function (req, res) {
    var countryId = new ObjectId(req.params['id']);
    contry_1.default.findOne({ _id: countryId })
        .then(function (country) {
        res.send(country);
    })
        .catch(function (err) {
        res.sendStatus(400);
    });
});
countryRouter.post('/', function (req, res) {
    var country = new contry_1.default();
    country.location = req.body.location;
    country.phone = req.body.phone;
    country.save()
        .then(function (food) {
        res.status(201).send(food);
    })
        .catch(function (err) {
        res.sendStatus(500);
    });
});
countryRouter.put('/', function (req, res) {
    var countryId = new ObjectId(req.body._id);
    req.body._id = countryId;
    if (req.body.country && req.body.location && req.body.phone) {
        contry_1.default.update({ _id: countryId }, req.body, { upsert: false })
            .then(function () {
            res.sendStatus(201);
        })
            .catch(function () {
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(400);
    }
});
countryRouter.delete('/:id', function (req, res) {
    var countryId = new ObjectId(req.params['id']);
    if (req.params['id']) {
        contry_1.default.findByIdAndRemove({ _id: countryId })
            .then(function () {
            res.send(201);
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
exports.default = countryRouter;
