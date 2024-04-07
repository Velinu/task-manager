import { Schema } from "mongoose";
import { ICategory } from "src/interfaces/category/categoryInterface";
const categorySchema: Schema = new Schema<ICategory>({
    id: { type: Number, unique: true},
    nome: { type: String, max: 20},
    cor: { type: String, max: 50}
}, {versionKey: false})
export default categorySchema