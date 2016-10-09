import * as mongoose from 'mongoose';
import * as Food from './food';
import * as Drink from './drink';

export interface IBrunch extends mongoose.Document{
    foods:Food.IFood[];
    drinks:Drink.IDrink[];
}

let brunchSchema = new mongoose.Schema({
    foods:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food'
    }],
    drinks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Drink'
    }]
});
export default mongoose.model<IBrunch>('Brunch', brunchSchema);
