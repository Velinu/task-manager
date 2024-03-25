import mongoose from "mongoose";
import { userInterface } from "../interface/user.interface";
const { Schema } = mongoose

export const userSchema = new Schema<userInterface>({
    Id: {type: Number, required: true, unique: true},
    username: {type: String, required: true, maxlength: 20},
    peso: {type: Number, required: false},
    senha: {type: String, required: true, minlength: 8},
    email: {type: String, required: true}
}, { versionKey: false })