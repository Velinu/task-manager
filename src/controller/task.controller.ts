import { Request, Response } from 'express';
import taskService from '../services/task.service';

class UserController {
    async postOne(req: Request, res: Response) {
        const result = await taskService.create(req.body);
        return res.status(result.statusCode).send(result.message);
    }

    async getAll(req: Request, res: Response) {
        const result = await taskService.findAll()
        return res.status(result!.statusCode).send(result!.message)
    }

    async getById(req: Request, res: Response) {
        const result = await taskService.findById(req.params.id)
        return res.status(result!.statusCode).send(result!.message)
    }

    async patchOne(req: Request, res: Response){
        const result = await taskService.patchOneById(Number(req.params.id), req.body)
        return res.status(result.statusCode).send(result.message)
    }

    async deleteOne(req: Request, res: Response){
        const result = await taskService.deleteOneById(Number(req.params.id))
        return res.status(result.statusCode).send(result.message)
    }
}

export default new UserController();