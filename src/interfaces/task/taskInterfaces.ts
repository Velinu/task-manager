/* Atributos: ID, título, descrição, data de criação, data de conclusão, tipo, categoria (opcional), 
status (pendente, em andamento, concluída), e usuário associado. */

import { Document } from "mongoose"
import { Task } from "../../model/task/taskClass"


export interface ITask{
    id: number
    title: string
    descr: string
    creatDate: Date
    conclDate?: Date
    type: string
    category?: string
    status: ["Pendente", "Em andamento", "Concluída"]
    userId: number 
}

export interface iTaskService{
    getById(id: number)
    getAll()
    post(task: Task)
    patch()
    delete(id: number)
}