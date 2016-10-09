"use strict";
var express = require('express');
var passport = require('passport');
var passportLocal = require('passport-local');
var user_1 = require('../models/user');
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
passport.use(new LocalStrategy(function (username, password, done) {
    user_1.default
        .findOne({ username: username.trim().toLowerCase() })
        .then(function (user) {
        if (!user) {
            return done(null, false, { message: 'incorrect username!' });
        }
        if (!user.validatePassword(password)) {
            return done(null, false, { message: "incoreect password!" });
        }
        user.password = null;
        return done(null, user);
    })
        .catch(function (err) {
        return done(err);
    });
}));
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/register', function (req, res) {
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('confirm', 'Password does not match').equals(req.body.password);
    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send(errors);
    }
    else {
        var newUser = new user_1.default();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.setPassword(req.body.password);
        newUser
            .save()
            .then(function (user) {
            res.send(user);
        })
            .catch(function (err) {
            res.send(err);
        });
    }
});
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
    if (req.isAuthenticated()) {
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
