import * as mongoose from 'mongoose';

export interface IAuthor extends mongoose.Document{
    firstName: string;
    lastName: string;
}

let authorSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    }
});

export default mongoose.model<IAuthor>('Author', authorSchema);
