import mongoose from "mongoose";
import { categorySchema } from "../Schemas/category.schema";

export const Category = mongoose.model('Categories', categorySchema)