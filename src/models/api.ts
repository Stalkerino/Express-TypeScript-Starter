import { Schema, Model, model, Document } from 'mongoose';

interface apiInterface {

    testEntry: String,
    testEntry2: String

}

let apiSchema: Schema = new Schema({

    testEntry: {
        type: String,
        required: true,
        default: ''
    },
    testEntry2: {
        type: String,
        required: true,
        default: ''
    }

});

export interface apiDocument extends apiInterface, Document { }
export let apiModel: Model<apiDocument> = model<apiDocument>('api', apiSchema);
