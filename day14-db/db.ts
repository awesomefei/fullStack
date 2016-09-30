import * as mongodb from 'mongodb';

const connectionString = 'mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

export default class DataBase{

    public static db:mongodb.Db;

    public static connect(){
        mongodb.MongoClient.connect(connectionString)
        .then((db) =>{
            this.db = db;
        })
        .catch((err) =>{
            console.log(err);
        })


    }
}
