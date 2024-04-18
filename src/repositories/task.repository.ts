
import { BaseRepository } from "./base.repository";
import taskModel from "../models/task.schema"
import { Task } from "src/models/task.schema";

export class TaskRepository extends BaseRepository<Task> {
    constructor() {
        super(taskModel);
    }
    
}
