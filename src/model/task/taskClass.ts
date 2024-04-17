import { ITask } from "../../interfaces/task/taskInterfaces";
import { Category } from "../category/categoryClass";
import categoryService from "../../service/categoryService";
async function getCategory(id:number): Promise<Category> {
    const res = await categoryService.getById(id)
    const category = new Category(res[0].id, res[0].nome, res[0].cor)
    return category
}
export class Task implements ITask{
    id: number;
    title: string;
    descr: string;
    creatDate: Date;
    conclDate?: Date;
    type: string;
    categoryId: number;
    status: string;
    userId: number;
    constructor(
        id: number,
        title: string,
        descr: string,
        creatDate: Date,
        type: string,
        status: string,
        userId: number,
        categoryId: number,
        conclDate?: Date,
    ) {
        
        this.id = id;
        this.title = title;
        this.descr = descr;
        this.creatDate = creatDate;
        this.type = type;
        this.categoryId = categoryId;
        this.status = status;
        this.userId = userId;
        if(conclDate !== undefined){
            this.conclDate = conclDate;
        }
    }
}