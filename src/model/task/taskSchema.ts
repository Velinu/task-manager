import { Schema } from "mongoose";
import { ITask } from "../../interfaces/task/taskInterfaces";
const taskSchema: Schema = new Schema<ITask>({
    id: { type: Number, required: true },
    title: { type: String, required: true, max: 20},
    descr: { type: String, required: true, max: 50},
    creatDate: { type: Date, required: true},
    conclDate: { type: Date, required: false},
    type: { type: String, required: true, max: 20},
    category: { type: String, required: false, max: 20},
    status: {  enum: ["Pendente", "Em andamento", "Concluída"], required: true},
    userId: { type: Number, required: true },
})
export default taskSchema