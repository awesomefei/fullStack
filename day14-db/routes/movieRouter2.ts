//import
import * as express from 'express';
import * as mongodb from 'mongodb';

//mongo related stuff
let ObjectId = mongodb.ObjectID;

let URL = "mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile";

let MongoClient = function(callback){
    console.log('connecting to mongodb...');

    mongodb.MongoClient.connect(URL, function(err, db){
        callback(err, db, function(){
            db.close();
            console.log('closing connection to mongodb...');
        });
    });
}

//classes
class Movice{
    constructor (public title, public director){
    }
}
//create an expresscrouter
let movieRouter = express.Router();

//api
movieRouter.get('/', (req,res) =>{
    MongoClient(function(err,db){
        db.collection('movies').find().toArray(function(err, result){
            if(err){
                res.sendStatus(500);
            }
            res.send(result);
        });

    });
});
export default movieRouter;
