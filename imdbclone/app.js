"use strict";
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var db_1 = require('./db');
var expressValidator = require('express-validator');
var bearerToken = require('express-bearer-token');
var index_1 = require('./routes/index');
var users_1 = require('./routes/users');
var movieRoute_1 = require('./routes/movieRoute');
var commentRoute_1 = require('./routes/commentRoute');
var celebRoute_1 = require('./routes/celebRoute');
var homeMovieRoute_1 = require('./routes/homeMovieRoute');
var directorRoute_1 = require('./routes/directorRoute');
var tagRoute_1 = require('./routes/tagRoute');
var watchlistRoute_1 = require('./routes/watchlistRoute');
var twitterRoute_1 = require('./routes/twitterRoute');
db_1.default.connect();
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bearerToken());
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/', index_1.default);
app.use('/api/users', users_1.default);
app.use('/api/movies', movieRoute_1.default);
app.use('/api/comments', commentRoute_1.default);
app.use('/api/celebs', celebRoute_1.default);
app.use('/api/homeMovies', homeMovieRoute_1.default);
app.use('/api/directors', directorRoute_1.default);
app.use('/api/tags', tagRoute_1.default);
app.use('/api/watchlist', watchlistRoute_1.default);
app.use('/api/twitters', twitterRoute_1.default);
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
