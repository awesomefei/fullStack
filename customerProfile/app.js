"use strict";
var express = require('express');
var bodyParse = require('body-parser');
var path = require('path');
var customerRouter_1 = require('./routes/customerRouter');
var index_1 = require('./routes/index');
var PORT = process.env.PORT || 3000;
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/', index_1.default);
app.use('/api/customers', customerRouter_1.default);
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.listen(PORT, function () {
    console.log('Listen to PORT: 3000');
});
