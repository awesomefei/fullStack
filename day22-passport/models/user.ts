import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export interface IUser extends mongoose.Document{
    username:string,
    password:string,
    admin:boolean,
    email:string,
    validatePassword(password),
    setPassword(password),
    generateToken()
}

let userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,


    },
    password:{
        type:String,
        required:true,
        min:6

    },
    email:{
        type:String,
        required:true,
        match:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    admin:{
        type:Boolean,
        default:false,
        required:false,
    }

});

//custom method
userSchema.method('setPassword', function(password){
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(password,salt);
});
userSchema.method('validatePassword', function(password){
    return bcrypt.compareSync(password, this.password);
});
userSchema.method('generateToken', function(){
    return jwt.sign({
        id:this._id,
        username: this.username,
        admin:this.admin
    }, 'SuperSecret');

});
export default mongoose.model<IUser>('User', userSchema);
