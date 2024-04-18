import { Document, Schema, model } from 'mongoose'
import { Collections } from '../enums/collection.enum';
import { iCategory } from '../interfaces/category.interface';

export type Category = iCategory & Document;

const CategorySchema = new Schema({
    id:{
        type: Number,
        required: [true, 'id']
    },
    name: {
        type: String,
        required: [true, 'name']
    },
    color: {
        type: String,
        required: [true, 'color']
    },
}, {
    versionKey: false,
});

export default model<Category>(Collections.CATEGORY_COLLECTION, CategorySchema);