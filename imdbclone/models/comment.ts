import * as mongoose from 'mongoose';

export interface IComment extends mongoose.Document{
    message: string;
    timeCreate: Date;
}

let commentSchema= new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    timeCreate: {
        type: Date,
        required: true
    }
})

export default mongoose.model<IComment>('Comment', commentSchema);
