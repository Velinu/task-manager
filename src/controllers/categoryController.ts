import { Request, Response } from 'express'
import { iCategoryController } from 'src/interfaces/category/categoryInterface';
import categoryService from '../service/categoryService';
import { Category } from '../model/category/categoryClass';

class categoryController implements iCategoryController{
    async getById(req: Request, res: Response) {
        try{
            const category = await categoryService.getById(Number(req.params.id))
            res.status(200).send(category)
        }catch(e){
            res.status(404).send('Nenhuma category encontrado')
        }
    }

    async post(req: Request, res: Response) {
        try{
            const { nome, cor, } = req.body;

            if ( nome && cor) {
                
                const category = new Category(
                    0,
                    nome,
                    cor);
                
                await categoryService.post(category);
                res.status(200).send(category)    
            }else{
                throw new Error("Atributos faltando")
            }
        }catch(e){
            res.status(500).send(`Não foi possível criar a category: ${e}`)
        }
    }

    async patch(req: Request, res: Response) {
        try{
            const { nome, cor } = req.body;

            const category = await categoryService.patch(Number(req.params.id), { nome, cor })
            
            res.status(200).send(category)
        }catch(e){
            res.send(`Não foi possível atualizar a category: ${e}`)
        }
        
    }

     
    async delete(req: Request, res: Response) {
        try{
            const categoryDelete = await categoryService.delete(Number(req.params.id))
            res.status(200).send(categoryDelete)
        }catch(e){
            res.status(500).send(`Não foi possível excluír a category: ${e}`)
        }
    }
    get: any;
    async getAll(req: any, res: any) {
        try{
            const category = await categoryService.getAll()
            res.send(category)
        }catch(e){
            res.status(404).send('Nenhuma category encontrada')
        }
    }
}

export default new categoryController()