"use strict";
var express = require('express');
var jwt = require('jsonwebtoken');
var movie_1 = require('../models/movie');
var watchlistRoute = express.Router();
watchlistRoute.get('/', function (req, res) {
    movie_1.default
        .find()
        .then(function (movies) {
        res.send(movies);
    })
        .catch(function (err) {
        res.send(err);
    });
});
function authorize(req, res, next) {
    var token = req['token'];
    console.log(token);
    jwt.verify(token, 'SuperSecret', function (err, decoded) {
        if (err) {
            res.sendStatus(401);
        }
        else {
            console.log(decoded);
            next();
        }
    });
}
function adminOnly(req, res, next) {
    var token = req['token'];
    jwt.verify(token, 'SuperSecret', function (err, decoded) {
        if (err || !decoded.admin) {
            res.sendStatus(401);
        }
        else {
            next();
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = watchlistRoute;
