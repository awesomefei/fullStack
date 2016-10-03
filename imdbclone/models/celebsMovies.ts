import * as mongoose from 'mongoose';

export interface ICelebsMovies extends mongoose.Document{
    movieId:string;
    celebId:string;
}


let celebsMoviesSchema = new mongoose.Schema({
    movieId:{
        type:String,
        required: true
    },
    celebId:{
        type:String,
        required: true
    }
});
export default mongoose.model<ICelebsMovies>('CelebsMovies', celebsMoviesSchema);
