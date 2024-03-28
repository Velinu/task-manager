import { model } from "mongoose";
import { ITask } from "../../interfaces/task/taskInterfaces";
import taskSchema from "./taskSchema";

export const taskModel = model<ITask>('Task', taskSchema)