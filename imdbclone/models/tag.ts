import * as mongoose from 'mongoose';
import * as Celeb from './celeb';

export interface ITag extends mongoose.Document{
    item:string;
}
let tagSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})
export default mongoose.model<ITag>('Tag', tagSchema);
