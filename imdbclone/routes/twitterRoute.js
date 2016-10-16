"use strict";
var express = require('express');
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'QYd3ZCerctLGnwapR8LMp8fsQ',
    consumer_secret: '0D4Y1z79FTPPWrRSy7W9IdYLO2BKyi41tBu6eBOt8NaNfSf59e',
    access_token_key: '782737111589859328-hNHlxlcR1dvJB1ZtwggCCqw2FoTY3vU',
    access_token_secret: 'khuAzafkXdcmdGwo0ktvfJTsocJrbYwaxemjvvuSyefBd'
});
var params = { screen_name: 'imdb' };
var twitterRoute = express.Router();
twitterRoute.get('/', function (req, res) {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
            res.send(tweets);
        }
        else {
            res.send('something went wrong');
        }
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = twitterRoute;
