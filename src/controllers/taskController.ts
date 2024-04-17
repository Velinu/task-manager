import { iTaskController, listaStatus } from "../interfaces/task/taskInterfaces";
import { Request, Response } from 'express'
import taskService from "../service/taskService";
import { Task } from "../model/task/taskClass";

class taskController implements iTaskController{
    async getById(req: Request, res: Response) {
        try{
            const task = await taskService.getById(Number(req.params.id))
            res.status(200).send(task)
        }catch(e){
            res.status(404).send('Nenhuma task encontrada')
        }
    }

    async post(req: Request, res: Response) {
        try{
            const { title, descr, type, 
                    userId, categoryId, creatDate } = req.body;
            
                const task = new Task(
                    0,
                    title,
                    descr,
                    creatDate,
                    type,
                    "Em andamento",
                    userId,
                    categoryId,);
                
                    console.log(categoryId)
                await taskService.post(task);
                res.status(200).send(task)    
        }catch(e){
            res.status(500).send(`Não foi possível criar a task: ${e}`)
        }
    }

    async patch(req: Request, res: Response) {
        try{
            const { title, descr, type, 
                    status, categoryId, conclDate } = req.body;

            const task = await taskService.patch(Number(req.params.id), { title, descr, type, 
                                                                           status, categoryId, conclDate })
            
            res.status(200).send(task)
        }catch(e){
            res.send(`Não foi possível atualizar a task: ${e}`)
        }
        
    }

     
    async delete(req: Request, res: Response) {
        try{
            const taskDeletes = taskService.delete(Number(req.params.id))
            res.status(204).send(taskDeletes)
        }catch(e){
            res.status(500).send(`Não foi possível excluír a task: ${e}`)
        }
    }
    async getAll(req: any, res: any) {
        try{
            const tasks = await taskService.getAll()
            res.send(tasks)
        }catch(e){
            res.status(404).send('Nenhuma task encontrada')
        }
    }

    async getAllByCategory(req: Request, res: Response){
        try{
            const tasks = await taskService.getAllByCategory(Number(req.params.category))
            tasks
            res.send(tasks)
        }catch(e){
            res.status(404).send('Nenhuma task encontrada')
        }
    }
}

export default new taskController()