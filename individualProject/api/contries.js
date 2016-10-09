"use strict";
var express = require('express');
var router = express.Router();
var contries = [
    { id: 1, contry: 'USA', lacation: ' Redmond Town Center, 7530 164th Ave NE A112, Redmond, WA 98052', phone: '(111)111-1111' },
    { id: 2, contry: 'China', lacation: ' Redmond Town Center, 7530 164th Ave NE A112, Redmond, WA 98052', phone: '(222)222-2222' },
    { id: 3, contry: 'UK', lacation: ' Redmond Town Center, 7530 164th Ave NE A112, Redmond, WA 98052', phone: '(333)333-1111' }
];
router.get('/contries', function (req, res, next) {
    res.json(contries);
});
module.exports = router;
