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
            const { title, descr, creatDate, type, 
                    status, userId, category } = req.body;

            if ( title && descr && creatDate && type && userId) {
                
                const task = new Task(
                    0,
                    title,
                    descr,
                    new Date(creatDate),
                    type,
                    "Em andamento",
                    userId,
                    category,);
                
                await taskService.post(task);
                res.status(200).send(task)    
            }else{
                throw new Error("Atributos faltando")
            }
        }catch(e){
            res.status(500).send(`Não foi possível criar a task: ${e}`)
        }
    }

    async patch(req: Request, res: Response) {
        if(listaStatus.indexOf(status) <= -1){
            throw new Error("Status não existente")
        }
        throw new Error("Method not implemented.");
    }
    async delete(req: Request, res: Response) {
        try{

        }catch(e){

        }
    }
    get: any;
    async getAll(req: any, res: any) {
        try{
            const tasks = await taskService.getAll()
            res.send(tasks)
        }catch(e){
            res.status(404).send('Nenhuma task encontrada')
        }
    }
}

export default new taskController()