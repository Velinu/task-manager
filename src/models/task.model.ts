import mongoose from "mongoose";
import { taskSchema } from "../Schemas/task.schema";

export const Task = mongoose.model('Task', taskSchema)