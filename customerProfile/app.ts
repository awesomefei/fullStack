import * as express from 'express';
import * as bodyParse from 'body-parser';
import * as ejs from 'ejs';
import * as path from 'path';

import customerRouter from './routes/customerRouter';
import router from './routes/index';

const PORT = process.env.PORT || 3000;
let app = express();

//views --> the folder name
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname,'ngApp')));

app.use('/', router);
app.use('/api/customers', customerRouter);

app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});

app.listen(PORT, ()=>{
    console.log('Listen to PORT: 3000');
});
