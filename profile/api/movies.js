"use strict";
var express = require('express');
var router = express.Router();
// create static list of movies
var movies = [
    { id: 1, title: "Star Wars", director: "Lucas" },
    { id: 2, title: "The Martian", director: "Scott" },
    { id: 3, title: "Ex Machina", director: "Garland" },
    { id: 4, title: "Superman", director: "Donner" },
    { id: 5, title: "Shrek", director: "Adamson" }
];
// unique movie id
var movieId = movies.length;
/* GET movies */
router.get('/movies', function (req, res, next) {
    res.json(movies);
});
/* GET movie by id */
router.get('/movies/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var movie = findMovie(id);
    if (movie) {
        res.json(movie);
    }
    else {
        res.sendStatus(404);
    }
});
/* Post to create or update movie */
router.post('/movies', function (req, res, next) {
    var movie = req.body;
    // update existing movie
    if (movie.id) {
        var original = findMovie(movie.id);
        original.title = movie.title;
        original.director = movie.director;
    }
    else {
        movie.id = ++movieId;
        movies.push(movie);
    }
    res.sendStatus(200);
});
/* delete movie by id */
router.delete('/movies/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    if (!findMovie(id)) {
        res.sendStatus(404);
    }
    else {
        movies = movies.filter(function (movie) {
            return movie.id != id;
        });
        res.sendStatus(200);
    }
});
/* find matching movies */
router.get('/movies/search/:search', function (req, res, next) {
    var search = req.params['search'];
    var matches = movies.filter(function (movie) {
        return movie.title.indexOf(search) == 0;
    });
    res.json(matches);
});
function findMovie(id) {
    var matches = movies.filter(function (movie) {
        return movie.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
