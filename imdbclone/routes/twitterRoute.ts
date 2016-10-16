import * as express from 'express';
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'QYd3ZCerctLGnwapR8LMp8fsQ',
    consumer_secret: '0D4Y1z79FTPPWrRSy7W9IdYLO2BKyi41tBu6eBOt8NaNfSf59e',
    access_token_key: '782737111589859328-hNHlxlcR1dvJB1ZtwggCCqw2FoTY3vU',
    access_token_secret: 'khuAzafkXdcmdGwo0ktvfJTsocJrbYwaxemjvvuSyefBd'
});

var params = {screen_name: 'imdb' };

let twitterRoute = express.Router();

twitterRoute.get('/', (req, res) =>{
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
       if (!error) {
           console.log(tweets);
           res.send(tweets);
       } else {
           res.send('something went wrong');
       }
   });
});
export default twitterRoute;
