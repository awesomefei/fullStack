"use strict";
var express = require('express');
var router = express.Router();
// create static list of movies
var entries = [
    { id: 1, author: 'Stephen', dateCreated: new Date('12/1/2015'), message: 'Hello from Stephen!' },
    { id: 2, author: 'Jeremy', dateCreated: new Date('12/4/2015'), message: 'Welcome to Coder Camps!' }
];
// unique entry id
var entryId = entries.length;
/* GET movies */
router.get('/guestbook', function (req, res, next) {
    res.json(entries);
});
/* GET entry by id */
router.get('/guestbook/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var entry = findEntry(id);
    if (entry) {
        res.json(entry);
    }
    else {
        res.sendStatus(404);
    }
});
/* Post to create or update entry */
router.post('/guestbook', function (req, res, next) {
    var entry = req.body;
    // update existing entry
    if (entry.id) {
        var original = findEntry(entry.id);
        original.author = entry.author;
        original.dateCreated = entry.dateCreated;
        original.message = entry.message;
    }
    else {
        entry.id = ++entryId;
        entry.dateCreated = new Date();
        entries.push(entry);
    }
    res.sendStatus(200);
});
/* delete entry by id */
router.delete('/guestbook/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    if (!findEntry(id)) {
        res.sendStatus(404);
    }
    else {
        entries = entries.filter(function (entry) {
            return entry.id != id;
        });
        res.sendStatus(200);
    }
});
function findEntry(id) {
    var matches = entries.filter(function (entry) {
        return entry.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
