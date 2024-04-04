/* Atributos: ID, título, descrição, data de criação, data de conclusão, tipo, categoria (opcional), 
status (pendente, em andamento, concluída), e usuário associado. */

import { Task } from "../../model/task/taskClass"
import { Request, Response } from 'express'

export const listaStatus = ["Pendente", "Em andamento", "Concluída"]

export interface ITask{
    id: number
    title: string
    descr: string
    creatDate: Date
    conclDate?: Date
    type: string
    category?: string
    status: string
    userId: number 
}

export interface iTaskService{
    getById(id: number): void
    getAll(): void
    post(task: Task): void
    patch(dataPatch: Task): void
    delete(id: number): void
}

export interface iTaskController{
    getAll(req: Request, res: Response): void
    getById(req: Request, res: Response): void
    post(req: Request, res: Response): void
    patch(req: Request, res: Response): void
    delete(req: Request, res: Response): void
}