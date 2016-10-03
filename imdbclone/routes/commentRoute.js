"use strict";
var express = require('express');
var comment_1 = require('../models/comment');
var commetRoute = express.Router();
commetRoute.get('/', function (req, res) {
    comment_1.default.find()
        .then(function (comments) {
        res.send(comments);
    })
        .catch(function (err) {
        res.sendStatus(404).send(err);
    });
});
commetRoute.delete('/:id', function (req, res) {
    comment_1.default.findByIdAndRemove(req.params['id'])
        .then(function () {
        res.sendStatus(200);
    })
        .catch(function () {
        res.sendStatus(404);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = commetRoute;
