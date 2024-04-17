import { Schema } from "mongoose";
import { ITask } from "../../interfaces/task/taskInterfaces";
const taskSchema: Schema = new Schema<ITask>({
    id: { type: Number, unique: true},
    title: { type: String, max: 20},
    descr: { type: String, max: 50},
    creatDate: { type: Date},
    conclDate: { type: Date, required: false},
    type: { type: String,  max: 20},
    categoryId: { type: Number, required: false, max: 20},
    status: {type: String },
    userId: { type: Number},
} , {versionKey: false})
export default taskSchema