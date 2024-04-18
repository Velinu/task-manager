
import { ResponseModel } from "../utils/response";
import {TaskRepository} from "../repositories/task.repository"
import { HttpStatus } from "../enums/httpCodes.enum";
import { Messages } from "../enums/messages.enum";
import { Errors } from "../enums/errors.enums";


class TaskService {
    private readonly task = new TaskRepository()
    async create(body: any) {
        const newTask = await this.task.create(body);
        if(newTask){
            return new ResponseModel(
                HttpStatus.CREATED,
                Messages.CREATED,
                newTask
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.CREATION_ERROR,
        )
    }

    async findAll() {
        const allTasks = await this.task.findAll()
        if(allTasks){
            return new ResponseModel(
                HttpStatus.OK,
                allTasks,
                
            )
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        )
    }
    
    async findById(body: any) {
        const task = await this.task.find({id: Number(body)})
        if(task){
            return new ResponseModel(
                HttpStatus.OK,
                task,
            )
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        )
    }

    async findUserTesks(body: any){
        const tasks = await this.task.find({userId: body.id})
        console.log(tasks)
        if(tasks){
            tasks
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        ) 
    }

    async patchOneById(id:Number, body: any) {
        const task = await this.task.updateOneById({id: id}, body)
        if(task){
            return new ResponseModel(
                HttpStatus.OK,
                task,
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }

    async deleteOneById(id: number) {
        const task = await this.task.deleteOneById({id: id})
        if(task){
            return new ResponseModel(
                HttpStatus.NO_CONTENT,
                task,
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }
    
    
}

export default new TaskService();