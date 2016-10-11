import * as mongoose from 'mongoose';
import * as User from './user';
import * as Food from './food';

export interface IOrder extends mongoose.Document{
    //users: User.IUser[];
    state:string;
    date:Date;
    foods:Food.IFood[];
    userId:mongoose.Schema.Types.ObjectId;

}

let orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    foods:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food'
    }],
    state:{
        type:String,
        enum:['completed', 'uncompleted']
    },
    date: {
        type: Date,
        required: false,
        default:new Date()
    }
})
export default mongoose.model<IOrder>('Order', orderSchema);
