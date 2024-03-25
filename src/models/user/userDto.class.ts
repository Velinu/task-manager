import { User } from "./user.model"

export class UserDTO{
    Id: number
    username: string
    peso: number
    senha: string
    email: string

    constructor(username: string, senha: string, email: string, peso?: number){
        this.username = username
        this.senha = senha
        this.email = email
        if(peso !== undefined){
            this.peso = peso
        }
        User.findOne({}, {sort: {$natural: -1}})
    }
}