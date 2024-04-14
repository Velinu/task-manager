import { Request, Response } from 'express'
import { iUserController } from "src/interfaces/user/userInterface";
import userService from "../service/userService"
import { User } from '../model/user/userClass';

class userController implements iUserController{
    async getById(req: Request, res: Response) {
        try{
            const task = await userService.getById(Number(req.params.id))
            res.status(200).send(task)
        }catch(e){
            res.status(404).send('Nenhum user encontrado')
        }
    }

    async post(req: Request, res: Response) {
        try{
            const { userName, peso, senha, email } = req.body;

            if ( userName && peso && senha && email) {
                
                const user = new User(
                    0,
                    userName,
                    peso,
                    senha,
                    email,);
                
                await userService.post(user);
                res.status(200).send(user)    
            }else{
                throw new Error("Atributos faltando")
            }
        }catch(e){
            res.status(500).send(`Não foi possível criar o user: ${e}`)
        }
    }

    async patch(req: Request, res: Response) {
        try{
            const { title, descr, type, 
                    status, category, conclDate } = req.body;

            const task = await userService.patch(Number(req.params.id), { title, descr, type, 
                                                                           status, category, conclDate })
            
            res.status(200).send(task)
        }catch(e){
            res.send(`Não foi possível atualizar a task: ${e}`)
        }
        
    }

     
    async delete(req: Request, res: Response) {
        try{
            const userDelete = userService.delete(Number(req.params.id))
            res.status(200).send(userDelete)
        }catch(e){
            res.status(500).send(`Não foi possível excluír o User: ${e}`)
        }
    }
    async getAll(req: any, res: any) {
        try{
            const user = await userService.getAll()
            res.send(user)
        }catch(e){
            res.status(404).send('Nenhum user encontrado')
        }
    }
}

export default new userController()