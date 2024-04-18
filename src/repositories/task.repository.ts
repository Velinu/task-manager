
import { BaseRepository } from "./base.repository";
import taskModel from "../models/task.schema"
import { Task } from "src/models/task.schema";

class UserRepository extends BaseRepository<Task> {
    constructor() {
        super(taskModel);
    }
    
}

export default new UserRepository()