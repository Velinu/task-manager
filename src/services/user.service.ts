
import { ResponseModel } from "../utils/response";
import {UserRepository} from "../repositories/user.repository"
import { HttpStatus } from "../enums/httpCodes.enum";
import { Messages } from "../enums/messages.enum";
import { Errors } from "../enums/errors.enums";


class UserService {
    private readonly user = new UserRepository()
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

    async findAll(body: any) {
        const allCategories = await this.user.findAll()
        if(allCategories){
            return new ResponseModel(
                HttpStatus.OK,
                allCategories,
                
            )
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        )
    }
    
    async findById(body: any) {
        const User = await this.user.find({id: Number(body)})
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