import * as mongoose from 'mongoose';
import * as Comment from './comment';
import * as Celeb from './celeb';

export interface IMovie extends mongoose.Document{
    title:string;
    introduction:string;
    trailerUrl:string;
    rate:number;
    url:string;
    comments:Comment.IComment[];
    celebs: Celeb.ICeleb[];
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
    celebs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Celeb'
    }],
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
