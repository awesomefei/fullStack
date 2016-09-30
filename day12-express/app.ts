//import libraries
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as path from 'path';

//import routers
import movieRouter from './routes/movieRouter';
import carRouter from './routes/carRouter';
import router from './routes/index';

//get port
const PORT = process.env.PORT || 3000;
let app = express();
//set up view engine
app.set('viwes', path.join(__dirname, 'views'));
app.set('view engine','ejs');


//inject libraries into express movieRouter
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/bower_components', express.static(path.join(__dirname,'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname,'ngApp')));


//create an movieRouterlication object






// movieRouter.get('/cars', (req,res) =>{
//     res.send(cars);
// });
app.use('/', router);
app.use('/api/movies', movieRouter);
app.use('/api/cars', carRouter);

// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});


//listen to port 3000
app.listen(PORT, ()=>{
    console.log('Listen to PORT: 3000');
});
