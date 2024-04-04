import { Schema } from "mongoose";
import { ITask } from "../../interfaces/task/taskInterfaces";
const taskSchema: Schema = new Schema<ITask>({
    id: { type: Number, unique: true},
    title: { type: String, max: 20},
    descr: { type: String, max: 50},
    creatDate: { type: Date},
    conclDate: { type: Date, required: false},
    type: { type: String,  max: 20},
    category: { type: String, required: false, max: 20},
    status: {   enum: ["Pendente", "Em andamento", "Concluída"]},
    userId: { type: Number},
})
export default taskSchema