
import { ResponseModel } from "../utils/response";
import {CategoryRepository} from "../repositories/category.repository"
import { HttpStatus } from "../enums/httpCodes.enum";
import { Messages } from "../enums/messages.enum";
import { Errors } from "../enums/errors.enums";


class CategoryService {
    private readonly category = new CategoryRepository()

    async create(body: any) {        
        const newCategory = await this.category.create(body)
        if(newCategory){
            return new ResponseModel(
                HttpStatus.CREATED,
                Messages.CREATED,
                newCategory
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.CREATION_ERROR,
        )
    }

    async findAll(body: any) {
        const allCategories = await this.category.findAll()
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
        const category = await this.category.find({id: Number(body)})
        if(category){
            return new ResponseModel(
                HttpStatus.OK,
                category,
            )
        }
        return new ResponseModel(
            HttpStatus.NOT_FOUND,
            Errors.NOT_FOUND_ERROR,
        )
    }

    async patchOneById(id:Number, body: any) {
        const category = await this.category.updateOneById({id: id}, body)
        if(category){
            return new ResponseModel(
                HttpStatus.OK,
                category,
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }

    async deleteOneById(id: number) {
        const category = await this.category.deleteOneById({id: id})
        if(category){
            return new ResponseModel(
                HttpStatus.NO_CONTENT,
                category,
            )
        }
        return new ResponseModel(
            HttpStatus.BAD_REQUEST,
            Errors.UPDATE_ERROR,
        )
    }
    
}

export default new CategoryService();