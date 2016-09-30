"use strict";
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('./ngApp'));
app.use('/scripts', express.static('bower_components'));
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.listen(PORT, function () {
    console.log(">>> to PORT : " + PORT + " is running <<<");
});
