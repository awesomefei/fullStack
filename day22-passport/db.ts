import * as mongoose from 'mongoose';
import User from './models/user';

const URL ='mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

class Database{
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;
        db.on('err', console.error.bind(console,'connection error'));
        db.once('open', console.log.bind(console,'connection succeful'));

        User.
        findOne({email: 'dan.do@codercamps.com'})
        .then((user) =>{
            if(!user){
                let adminUser = new User();
                adminUser.username = 'dan.do@codercamps.com';
                adminUser.email='dan.do@codercamps.com';
                adminUser.setPassword('123');
                adminUser.admin=true;
                adminUser
                    .save()
                    .then(() =>{
                        console.log('Admin successfully created');
                    })
                    .catch(() =>{
                        console.log('Admin creation went wrong...')
                    })
            }else{
                console.log('Admin already exists in Database');
            }
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}
export default Database;
