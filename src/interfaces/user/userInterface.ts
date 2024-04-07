/* Atributos: Atributos: ID, username, peso, senha, e-mail. */

import { Request, Response } from 'express'
import { User } from 'src/model/user/userClass'

export interface IUser{
    id: number
    userName: string
    peso: number
    senha: string
    email: string
}

export interface iUserService{
    getById(id: number): void
    getAll(): void
    post(user: User): void
    patch(id: number, dataPatch: any): void
    delete(id: number): void
}

export interface iUserController{
    getAll(req: Request, res: Response): void
    getById(req: Request, res: Response): void
    post(req: Request, res: Response): void
    patch(req: Request, res: Response): void
    delete(req: Request, res: Response): void
}