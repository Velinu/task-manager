
import { ResponseModel } from "../utils/response";
import {UserRepository} from "../repositories/user.repository"
import { HttpStatus } from "../enums/httpCodes.enum";
import { Messages } from "../enums/messages.enum";
import { Errors } from "../enums/errors.enums";
import TaskService from '../services/task.service'
import { TaskRepository } from "../repositories/task.repository";

class UserService {
    private readonly user = new UserRepository()
    private readonly task = new TaskRepository()
    async create(body: any) {   
        const newUser = await this.user.create(body)
        if(newUser){
            return new ResponseModel(
                HttpStatus.CREATED,
                Messages.CREATED,
                newUser
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.CREATION_ERROR,
        )
    }

    async findAll() {
        const allUsers = await this.user.find({})
        if(allUsers){
            return new ResponseModel(
                HttpStatus.OK,
                allUsers,
                
            )
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        )
    }
    
    async findById(body: any) {
        const User = await this.user.findById({id: Number(body)})
        if(User){
            return new ResponseModel(
                HttpStatus.OK,
                User,
            )
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        )
    }

    async findAllTasks(id: number){
        const tasks = await this.task.find({userId: id})
        if(tasks){
            return new ResponseModel(
                HttpStatus.OK,
                tasks
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }

    async patchOneById(id:Number, body: any) {
        const User = await this.user.updateOneById({id: id}, body)
        if(User){
            return new ResponseModel(
                HttpStatus.OK,
                User,
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }

    async deleteOneById(id: number) {
        const User = await this.user.deleteOneById({id: id})
        if(User){
            return new ResponseModel(
                HttpStatus.NO_CONTENT,
                User,
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }
}

export default new UserService();