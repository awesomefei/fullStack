import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as passport from 'passport';

import Database from './db';

const expressValidator = require('express-validator');
const bearerToken = require('express-bearer-token');


import routes from './routes/index';
import users from './routes/users';
import movieRoute from './routes/movieRoute';
import commetRoute from './routes/commentRoute';
import celebRoute from './routes/celebRoute';
import homeMovieRoute from './routes/homeMovieRoute';
import directorRoute from './routes/directorRoute';
import tagRoute from './routes/tagRoute';
import watchlistRoute from './routes/watchlistRoute';

Database.connect();
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//passport

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

app.use('/', routes);
app.use('/api/users', users);



app.use('/api/movies', movieRoute);
app.use('/api/comments', commetRoute);
app.use('/api/celebs', celebRoute);
app.use('/api/homeMovies', homeMovieRoute);
app.use('/api/directors', directorRoute);
app.use('/api/tags', tagRoute);
app.use('/api/watchlist', watchlistRoute);


// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err:Error, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err:Error, req, res, next) => {
  res.status(err['status'] || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export = app;
