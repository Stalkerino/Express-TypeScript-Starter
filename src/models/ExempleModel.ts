import {Schema, Model, model, Document} from 'mongoose';

interface UserInterface {
    createdAt: Date,
    updatedAt: Date,
    lastName: string,
    username: string,
    email: string,
    password: string,
    posts?: any[]
}

let UserSchema: Schema = new Schema({
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        lastName: {
            type: String,
            default: '',
            required: true
        },
        firstName: {
            type: String,
            default: '',
            required: true
        },
        username: {
            type: String,
            default: '',
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            default: '',
            required: true
        },
        password: {
            type: String,
            default: '',
            required: true
        },
        posts: [{
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }]
    },
    {
        versionKey: false
    });

export interface UserDocument extends UserInterface, Document {
}

export let UserModel: Model<UserDocument> = model<UserDocument>('User', UserSchema);