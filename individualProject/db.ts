import * as mongoose from 'mongoose';
const URL ='mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

class Database{
    public static connect(){
        mongoose.connect(URL);

        let db = mongoose.connection;
        db.on('err', function(){
            console.log('connection err');
        });
        db.once('open', function(){
            console.log('connected to database!!!');
        })
    }
}
export default Database;
