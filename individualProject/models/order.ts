import * as mongoose from 'mongoose';
import * as User from './user';
import * as Food from './food';

export interface IOrder extends mongoose.Document{
    //users: User.IUser[];
    state:string;
    date:Date;
    foods:Food.IFood[];

}

let orderSchema = new mongoose.Schema({
    // users:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }],
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
        required: true
    }
})
export default mongoose.model<IOrder>('Order', orderSchema);
