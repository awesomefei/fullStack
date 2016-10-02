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
        required:false
        },
    dislike:{
        type:Number,
        required:false
        },
    firstName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:false
    },
    imageUrl:{
        type:String,
        required:false
    },
    agent:{
        type:String,
        required:false
    },
    spouse:{
        type:String,
        required:false
    },
    career:{
        type:String,
        required:false
    },
    website:{
        type:String,
        required:false
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
})
export default mongoose.model<ICeleb>('Celeb', celebSchema);
