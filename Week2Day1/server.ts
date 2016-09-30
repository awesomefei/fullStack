//brings in express library
import * as express from 'express';
//create a new express object and add it to app
const app = express();
const PORT = process.env.PORT || 4000;
//sets view engine
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//read static folders
app.use(express.static('./ngApp'));

app.use('/scripts', express.static('bower_components'));


//render index
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    return res.render('index');
  }
});

//listen to PORT
app.listen(PORT, function(){
  console.log(`listen to PORT : ${PORT}`);
})
