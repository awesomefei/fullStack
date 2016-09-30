import * as mongoose from 'mongoose';
import Movie from './models/movies'
const URL = 'mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

class Database{
    public static connect(){
        mongoose.connect(URL)
        .then(() =>{
            Movie.find()
            .then((movies) =>{
                // if(!movies[0]){
                //     Movie.collection.insert([
                //         {title: 'Star War 1', director : 'Lucas'},
                //         {title: 'Star War 2', director : 'Lucas'},
                //         {title: 'Star War 3', director : 'Lucas'},
                //         {title: 'Star War 4', director : 'Lucas'},
                //         {title: 'Star War 5', director : 'Lucas'},
                //     ]);
                // }
            });
        });





        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error...'));
        db.once('open', console.log.bind(console, 'connect to Database...'));

    }
}

export default Database;
