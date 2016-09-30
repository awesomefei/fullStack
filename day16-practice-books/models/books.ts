import * as mongoose from 'mongoose';
import * as Author from './author';

export interface IBook extends mongoose.Document{
    title: string;
    price: number;
    authors: Author.IAuthor[];
}

let bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    authors: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }]
});

export default mongoose.model<IBook>('Book', bookSchema);
