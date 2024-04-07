import { IUser } from "src/interfaces/user/userInterface";

export class User implements IUser{
    id: number;
    userName: string;
    peso: number;
    senha: string;
    email: string;

    constructor(id: number, userName: string, peso: number, senha: string, email: string) {
        this.id = id;
        this.userName = userName;
        this.peso = peso;
        this.senha = senha;
        this.email = email;
    }
}