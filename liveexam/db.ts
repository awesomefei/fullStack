import * as mongoose from 'mongoose';
import Car from './models/car'
const URL = 'mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

class Database {
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', console.log.bind(console, 'CONNECT TO PORT 3000'))

        Car.find('cars').then((cars)=>{
             if(cars.length==0) {
                Car.create(
                    {make:'Honda', brand: 'Civic', year: 1995},
                    {make:'Toyota', brand: 'Avalon', year: 1995},
                    {make:'Nissan', brand: 'GTR', year: 2015}
                ).then(()=>{
                    console.log('cars created')
                })

            } else {
                console.log('already in database')
            }
        })
        .catch((err)=>{
            console.log('error')
        })
    }
}

export default Database;
