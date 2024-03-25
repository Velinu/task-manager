import mongoose from "mongoose";
import { categoryInterface } from "../interface/category.interface";
const {Schema} = mongoose

export const categorySchema = new Schema<categoryInterface>({
    id: {type: Number, unique: true, required: true},
    nome: {type: String, required: true},
    cor: {type: String, required: false} 
}, { versionKey: false })
