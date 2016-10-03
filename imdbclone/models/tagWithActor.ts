import * as mongoose from 'mongoose';

export interface ITagWithCeleb extends mongoose.Document{
    itemId:string;
    celebId:string;
}

let tagWithCelebSchema = new mongoose.Schema({
    itemId:{
        type:String,
        required:true
    },
    celebId:{
        type:String,
        required:true
    }
});
export default mongoose.model<ITagWithCeleb>('TagWithCeleb', tagWithCelebSchema);
