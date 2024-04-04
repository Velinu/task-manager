import { ITask } from "../../interfaces/task/taskInterfaces";

export class Task implements ITask{
    id: number;
    title: string;
    descr: string;
    creatDate: Date;
    conclDate?: Date;
    type: string;
    category?: string | undefined;
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
        category?: string,
        conclDate?: Date,
    ) {
        this.id = id;
        this.title = title;
        this.descr = descr;
        this.creatDate = creatDate;
        this.type = type;
        this.status = status;
        this.userId = userId;
        this.category = category;
        if(conclDate !== undefined){
            this.conclDate = conclDate;
        }
    }
}