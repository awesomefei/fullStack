import * as mongoose from 'mongoose';
import * as Comment from './comment';

export interface ICeleb extends mongoose.Document{
    firstName:string;
    lastName:string;
    imageUrl:string;
    agent:string;
    spouse:string;
    career:string;
    website:string;
    like:number;
    dislike:number;
    comments:Comment.IComment[];
}

let celebSchema = new mongoose.Schema({
    like:{
        type:Number,
        required:true
        },
    dislike:{
        type:Number,
        required:true
        },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    agent:{
        type:String,
        required:true
    },
    spouse:{
        type:String,
        required:true
    },
    career:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
})
export default mongoose.model<ICeleb>('Celeb', celebSchema);
