import * as mongoose from 'mongoose';
import * as Comment from './comment';
import * as Celeb from './celeb';
import * as Director from './director';

export interface IHomeMovie extends mongoose.Document{
    title:string;
    introduction:string;
    trailerUrl:string;
    rate:number;
    imageUrl:string;

    director:Director.IDerector[];
    comments:Comment.IComment[];
    celebs: Celeb.ICeleb[];

}

let homeMovieSchema = new mongoose.Schema({
    director:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Director'
    }],
    celebs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Celeb'
    }],
    title:{
        type:String,
        required:true
    },
    introduction:{
        type:String,
        required:true
    },

    rate:{
        type:Number,
        required:false
    },
    imageUrl:{
        type: String,
        required:false
    },
    trailerUrl:{
        type:String,
        required:false
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
});

export default mongoose.model<IHomeMovie>('HomeMovie', homeMovieSchema);
