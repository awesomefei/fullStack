import * as mongoose from 'mongoose';

export interface ICountry extends mongoose.Document{
    location:string,
    phone:string
}

let countrySchema = new mongoose.Schema({
    location:{
        type:String,
        required: true
    },

    phone:{
        type: String,
        required:true
    }
})

export default mongoose.model<ICountry>('Country', countrySchema);
