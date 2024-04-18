import { Request, Response } from 'express';
import categoryService from '../services/category.service';

class CategoryController {
    async postOne(req: Request, res: Response) {
        const result = await categoryService.create(req.body);
        return res.status(result.statusCode).send(result.message);
    }

    async getAll(req: Request, res: Response) {
        const result = await categoryService.findAll(req.body)
        return res.status(result!.statusCode).send(result!.message)
    }

    async getById(req: Request, res: Response) {
        const result = await categoryService.findById(req.params.id)
        return res.status(result!.statusCode).send(result!.message)
    }

    async patchOne(req: Request, res: Response){
        const result = await categoryService.patchOneById(Number(req.params.id), req.body)
        return res.status(result.statusCode).send(result.message)
    }

    async deleteOne(req: Request, res: Response){
        const result = await categoryService.deleteOneById(Number(req.params.id))
        return res.status(result.statusCode).send(result.message)
    }
}

export default new CategoryController();