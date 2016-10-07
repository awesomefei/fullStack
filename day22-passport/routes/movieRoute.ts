import * as express from 'express';
import * as jwt from 'jsonwebtoken';

let movoieRoute = express.Router();

movoieRoute.get('/', authorize, (req,res) =>{
    let movies = [
        {id:1, title:'Star Wars 1', director: 'Lucas'},
        {id:2, title:'Star Wars 2', director: 'Lucas'},
        {id:3, title:'Star Wars 3', director: 'Lucas'},
        {id:4, title:'Star Wars 4', director: 'Lucas'},
        {id:5, title:'Star Wars 5', director: 'Lucas'},
    ];
    res.send(movies);


})
//authorize function
function authorize(req, res, next){
    let token = req['token'];
    console.log(token);

    jwt.verify(token, 'SuperSecret', function(err, decoded){
        if(err){
            res.sendStatus(401);
        }else{
            console.log(decoded);
            next();
        }
    });
}
function adminOnly(req, res, next){
    let token = req['token'];
    jwt.verify(token, 'SuperSecret', function(err, decoded){
        if(err || !decoded.admin){
            res.sendStatus(401);
        }else {
            next();
        }
    });
}

export default movoieRoute;
