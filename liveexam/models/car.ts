import * as mongoose from 'mongoose';

export interface ICar extends mongoose.Document{
    make:string,
    year:number,
}


let carSchema = new mongoose.Schema({
    make:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }

})

export default mongoose.model<ICar>('Car', carSchema)
