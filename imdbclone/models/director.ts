import * as mongoose from 'mongoose';
import * as Movie from './movie';

export interface IDirector extends mongoose.Document{
    name:string;
    imageUrl:string;
    agent:string;
    career:string;
    website:string;
    knownFor:Movie.IMovie[];

}

let directorSchema = new mongoose.Schema({

    knownFor:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }],

    name:{
        type:String,
        required:true
    },

    imageUrl:{
        type:String,
        required:false
    },
    agent:{
        type:String,
        required:false
    },

    career:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },

})
export default mongoose.model<IDirector>('Director', directorSchema);
