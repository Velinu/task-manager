import { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
    async postOne(req: Request, res: Response) {
        const result = await userService.create(req.body);
        return res.status(result.statusCode).send(result.message);
    }

    async getAll(req: Request, res: Response) {
        const result = await userService.findAll()
        return res.status(result!.statusCode).send(result!.message)
    }

    async getById(req: Request, res: Response) {
        const result = await userService.findById(req.params.id)
        return res.status(result!.statusCode).send(result!.message)
    }

    async getAllTasks(req: Request, res: Response) {
        const result = await userService.findAllTasks(Number(req.params.id))
        return res.status(result!.statusCode).send(result.message)
    }

    async countTasks(req: Request, res: Response){
        const result = await userService.countTasks(Number(req.params.id))
        return res.status(result!.statusCode).send(result.message)
    }

    async patchOne(req: Request, res: Response){
        const result = await userService.patchOneById(Number(req.params.id), req.body)
        return res.status(result.statusCode).send(result.message)
    }

    async deleteOne(req: Request, res: Response){
        const result = await userService.deleteOneById(Number(req.params.id))
        return res.status(result.statusCode).send(result.message)
    }
}

export default new UserController();