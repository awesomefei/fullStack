"use strict";
var _this = this;
var express = require('express');
var mongodb = require('mongodb');
var order_1 = require('../models/order');
var jwt = require('jsonwebtoken');
var ObjectId = mongodb.ObjectID;
var orderRoute = express.Router();
orderRoute.get('/', authorize, function (req, res) {
    order_1.default.find()
        .populate('foods')
        .then(function (orders) {
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
orderRoute.post('/addfood/:orderId', function (req, res) {
    var orderId = new ObjectId(req.params['orderId']);
    var foodId = new ObjectId(req.body.foodId);
    order_1.default.update({ _id: orderId }, { $push: { foods: foodId } })
        .then(function (order) {
        console.log(_this.foods);
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
