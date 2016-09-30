import * as mongoose from 'mongoose';
import Book from './models/books';
const URL = 'mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

class Database{
    public static connect(){
        mongoose.connect(URL)
        .then(() =>{
            Book.find()
            .then((books) =>{

            });
        });

        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error...'));
        db.once('open', console.log.bind(console, 'connextion successful...'))
    }
}

export default Database;
