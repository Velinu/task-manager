import { model } from "mongoose";
import { ICategory } from "src/interfaces/category/categoryInterface";
import categorySchema from "./categorySchema";

export const categoryModel = model<ICategory>('Category', categorySchema)