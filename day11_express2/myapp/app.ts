// import * as request from 'request';
//
// request.get('http://codercamps.com', (err, res, body)=>{
//
//     //console.log(body);
//     if(!err && res.statusCode == 200){
//         //console.log(body);
//         console.log(res.statusCode);
//     }else{
//         console.log(`${err.hostname} not found. Erroe CODE: ${err.code}`);
//     }
//
//
// })

import * as gm from 'gm';
import * as path from 'path';
import * as request from 'request';
import * as readline from 'readline';
import * as stuff from './services/stuffService';
import * as random from './services/randomService';
import * as cal from './services/calService';

let randomNum = random.generateRandomNum();
console.log(cal.calculate(randomNum));

//
// let newImagePath = path.join(__dirname, 'hello.jpg')
// gm(200, 400, '#ddff99f3')
//   .fill('red')
//   .drawCircle(100, 200, 100, 100)
//   .write(newImagePath, function (err) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('hello.jpg image created');
//       }
//   });





// import * as express from 'express';
// import * as path from 'path';
// import * as favicon from 'serve-favicon';
// import * as logger from 'morgan';
// import * as cookieParser from 'cookie-parser';
// import * as bodyParser from 'body-parser';
// import * as ejs from 'ejs';
//
// import routes from './routes/index';
// import users from './routes/users';
//
// let app = express();



// app.listen(3000, function(){
//     console.log("PORT 3000 running successfully...")
// })
//
//
// import TaxService from './services/taxService';
//
//

//impor所有的内容
//import * as stuff from './services/stuffService';
//impor{}里的内容
// import {Product,doSomethingElse} from './services/stuffService';
//
// let myPro = new Product();
// doSomethingElse();

// let taxAmount = TaxService.calculator(1000);
// console.log(`The tax amount is ${taxAmount} dollars`);

// stuff.doSomethingElse();
// let myProduct = new stuff.Product();
// myProduct.name='LAp';
// myProduct.price=1000;
// console.log(myProduct.name + " " + myProduct.price);
// console.log(stuff.message);














// let app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
// app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
// app.use('/api', express.static(path.join(__dirname, 'api')));
//
// app.use('/', routes);
// app.use('/users', users);
//
//
// // redirect 404 to home for the sake of AngularJS client-side routes
// app.get('/*', function(req, res, next) {
//   if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
//     return next({ status: 404, message: 'Not Found' });
//   } else {
//     return res.render('index');
//   }
// });
//
//
// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   let err = new Error('Not Found');
//   err['status'] = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use((err:Error, req, res, next) => {
//     res.status(err['status'] || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use((err:Error, req, res, next) => {
//   res.status(err['status'] || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
//
// export = app;
