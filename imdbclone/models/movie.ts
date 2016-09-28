import * as mongoose from 'mongoose';
import * as Comment from './comment';

export interface IMovie extends mongoose.Document{
    title:string;
    introduction:string;
    trailerUrl:string;
    rate:number;
    url:string;
    comments:Comment.IComment[];
}

let movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    introduction:{
        type:String,
        required:true
    },
    // timeReleased:{
    //     type:Number,
    //     required:true
    // },
    rate:{
        type:Number,
        required:true
    },
    url:{
        type: String,
        required:true
    },
    trailerUrl:{
        type:String,
        required:true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
});

export default mongoose.model<IMovie>('Movie', movieSchema);
