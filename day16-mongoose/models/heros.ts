import * as mongoose from 'mongoose';

export interface IHero extends mongoose.Document{
    name:string;
    age:number;
}

let heroSchema = new mongoose.Schema({
    name:{
        type: String,
        required: String
    },
    age: {
        type: Number,
        required: true
    },
})

export default mongoose.model<IHero>('Hero', heroSchema);
