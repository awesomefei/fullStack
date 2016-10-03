"use strict";
var mongodb = require('mongodb');
var express = require('express');
var celebsMovies_1 = require('../models/celebsMovies');
var ObjectId = mongodb.ObjectID;
var clebesMoviesRoute = express.Router();
clebesMoviesRoute.get('/', function (req, res) {
    celebsMovies_1.default.find()
        .then(function (clebesMovies) {
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = clebesMoviesRoute;
