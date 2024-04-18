import { Category } from "src/models/category.schema";
import { BaseRepository } from "./base.repository";
import categoryModel from "../models/category.schema"

export class CategoryRepository extends BaseRepository<Category> {
    constructor() {
        super(categoryModel);
    }

}
