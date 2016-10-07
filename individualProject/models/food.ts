import * as mongoose from 'mongoose';

export interface IFood extends mongoose.Document{
    name:string,
    price:number,
    url:string,
}
let foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        reuired:true
    },
    url:{
        type:String,
        required:false
    }

})
export default mongoose.model<IFood>('Food', foodSchema)
