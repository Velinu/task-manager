import mongoose from "mongoose";
import { Schema } from "mongoose";
import { taskInterface } from "../interface/task.interface";

export const taskSchema = new Schema<taskInterface>({
    id: {type: Number, unique: true, required: true},
    titulo: {type: String, required: true, maxlength: 20},
    descricao: {type: String, required: false, maxlength: 50},
    dataCriacao: {type: Date, required: true},
    dataConclusao: {type: Date, required: true},
    status: {type: String, enum: ['Pendente','Em andamento','Concluída'], required: true}
}, { versionKey: false })