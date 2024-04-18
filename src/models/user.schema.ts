import { Document, Schema, model } from 'mongoose'
import { iUser } from '../interfaces/user.interface';
import { Collections } from '../enums/collection.enum';

export type User = iUser & Document;

const UserSchema = new Schema({
    id:{
        type: Number,
        required: [true, 'id']
    },
    username: {
        type: String,
        required: [true, 'username']
    },
    weight: {
        type: Number,
        required: [true, 'weight']
    },
    password: {
        type: String,
        required: [true, 'password']
    },
    email: {
        type: String,
        required: [true, 'email']
    },
    refreshToken: String,
    canLogin: {
        type: Boolean,
        required: [true, 'canLogin']
    },
    active: {
        type: Boolean,
        required: [true, 'active']
    }
}, {
    versionKey: false,
});

export default model<User>(Collections.USERS_COLLECTION, UserSchema);