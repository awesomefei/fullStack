"use strict";
var express = require("express");
var passport = require("passport");
var passportLocal = require("passport-local");
var user_1 = require("../models/user");
var mongodb = require("mongodb");
var order_1 = require("../models/order");
var ObjectId = mongodb.ObjectID;
var router = express.Router();
var LocalStrategy = passportLocal.Strategy;
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    user_1.default.findById(id, function (err, user) {
        done(err, user);
    });
});
passport.use(new LocalStrategy(function (username1, password, done) {
    user_1.default.findOne({ username: username1.trim().toLowerCase() })
        .then(function (user) {
        if (!user) {
            return done(null, false, { message: 'incorrect username!' });
        }
        if (!user.validatePassword(password)) {
            return done(null, false, { message: 'incoreect password!' });
        }
        user.password = null;
        return done(null, user);
    })
        .catch(function (err) {
        return done(err);
    });
}));
router.get('/', function (req, res, next) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
    user_1.default.find()
        .populate('orders')
        .then(function (users) {
        res.send(users);
    });
});
router.post('/addorders/:userId', function (req, res) {
    var userId = new ObjectId(req.params['userId']);
    console.log("userId  " + userId);
    var orderId = new ObjectId(req.body.orderId);
    console.log("orderId  " + orderId);
    user_1.default.update({ _id: userId }, { $push: { orders: orderId } })
        .then(function (user) {
        console.log("!!!!!!!!!!!!! add success");
        console.log(user.orders);
        res.sendStatus(201);
    })
        .catch(function (err) {
        res.sendStatus(400).send(err);
    });
});
router.post('/register', function (req, res) {
    var errors = req.validationErrors();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is  required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('confirmPassword', 'Password do not match')
        .equals(req.body.password);
    if (errors) {
        console.log(errors[0].msg);
        res.status(400).send(errors);
    }
    else {
        var newUser = new user_1.default();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.setPassword(req.body.password);
        newUser.save()
            .then(function (user) {
            console.log('user created!!!');
            var newOrder = new order_1.default();
            newOrder.userId = user._id;
            newOrder.save()
                .then(function () {
                console.log('!!!order created!!');
                res.send(user);
            })
                .catch(function () {
                console.log('!!order not created!');
                res.sendStatus(400);
            });
        })
            .catch(function (err) {
            console.log('user not created');
            res.send(err);
        });
    }
});
router.post('/login', passport.authenticate('local', { failureRedirect: '/longin' }), function (req, res) {
    console.log('!!!!!!!!users/login');
    if (req.isAuthenticated()) {
        console.log('!!!!!!!!Authenticated');
        var data = {
            token: req.user.generateToken(),
            username: req.user.username,
            admin: req.user.admin
        };
        res.send(data);
    }
    else {
        res.send('you are not authenticated!');
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
