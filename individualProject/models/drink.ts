import * as mongoose from 'mongoose';

export interface IDrink extends mongoose.Document{
    name:string,
    price:number,
    detail:string,
    url:string,
}

let drinkSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        reuired:true
    },
    detail:{
        type:String,
        required:false
    },
    url:{
        type:String,
        required:false
    }
})
export default mongoose.model<IDrink>('Drink', drinkSchema);
