import { ICategory } from "src/interfaces/category/categoryInterface";
import { ITask } from "../../interfaces/task/taskInterfaces";

export class Category implements ICategory{
    id: number
    nome: string
    cor: string 
    constructor(
        id: number,
        nome: string,
        cor: string 
    ) {
        this.id = id;
        this.nome = nome;
        this.cor = cor;
    }
}