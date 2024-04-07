//Atributos: ID, nome, cor (para identificação visual).

import { Category } from "src/model/category/categoryClass"
import {  } from "../../model/task/taskClass"
import { Request, Response } from 'express'


export interface ICategory{
    id: number
    nome: string
    cor: string 
}

export interface iCategoryService{
    getById(id: number): void
    getAll(): void
    post(category: Category): void
    patch(id: number, dataPatch: any): void
    delete(id: number): void
}

export interface iCategoryController{
    getAll(req: Request, res: Response): void
    getById(req: Request, res: Response): void
    post(req: Request, res: Response): void
    patch(req: Request, res: Response): void
    delete(req: Request, res: Response): void
}