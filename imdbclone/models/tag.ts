import * as mongoose from 'mongoose';
import * as Celeb from './celeb';
import * as Movie from './movie';

export interface ITag extends mongoose.Document{
    item:string;
    movies:Movie.IMovie[];
}
let tagSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    movies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }]
});
export default mongoose.model<ITag>('Tag', tagSchema);
