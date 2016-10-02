import * as mongoose from 'mongoose';
import * as Movie from './movie';

export interface IDerector extends mongoose.Document{
    firstName:string;
    lastName:string;
    imageUrl:string;
    agent:string;
    career:string;
    website:string;
    knownFor:Movie.IMovie[];

}

let derectorSchema = new mongoose.Schema({

    knownFor:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }],

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

    career:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },

})
export default mongoose.model<IDerector>('Derector', derectorSchema);
