"use strict";
var express = require('express');
var mongodb = require('mongodb');
var order_1 = require('../models/order');
var jwt = require('jsonwebtoken');
var ObjectId = mongodb.ObjectID;
var orderRoute = express.Router();
orderRoute.get('/', authorize, function (req, res) {
    console.log(req.user.id);
    var userId = new ObjectId(req.user.id);
    order_1.default.findOne()
        .where({ userId: userId })
        .populate('foods')
        .then(function (orders) {
        console.log(orders);
        res.send(orders);
    })
        .catch(function (err) {
        res.send(err);
    });
});
orderRoute.post('/', authorize, function (req, res) {
    var order = new order_1.default();
    order.date = new Date();
    order.state = req.body.state;
    order.save()
        .then(function (order) {
        res.status(201).send(order);
    })
        .catch(function (err) {
        res.status(400).send(err);
    });
});
orderRoute.post('/addfood/:foodId', authorize, function (req, res) {
    var foodId = new ObjectId(req.params['foodId']);
    console.log('------');
    console.log(req.user.id);
    var userId = new ObjectId(req.user.id);
    order_1.default.update({ userId: userId }, { $push: { foods: foodId } })
        .then(function (order) {
        console.log(order);
        res.sendStatus(201);
    })
        .catch(function (err) {
        res.sendStatus(400).send(err);
    });
});
function authorize(req, res, next) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!! order router');
    var token = req['token'];
    console.log(token);
    jwt.verify(token, 'SuperSecret', function (err, decoded) {
        if (err) {
            res.sendStatus(401);
        }
        else {
            req.user = decoded;
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
exports.default = orderRoute;
