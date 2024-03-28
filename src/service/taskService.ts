import { iTaskService } from "../interfaces/task/taskInterfaces";
import { Task } from "../model/task/taskClass";
import { taskModel } from "../model/task/taskModel";

class taskService implements iTaskService{

    async getById(id: number) {
        try{
            const res = await taskModel.findById(id)
            return res
        }catch(e){
            console.log(e)
            throw new Error("Task not found");
        }
        
    }

    async getAll() {
        try{
            const res = await taskModel.find()
            return res 
        }catch(e){
            console.log(e)
            throw new Error("No task found");
        }
    }

    async post(task: Task) {
        try{
            const lastTask = await taskModel.findOne({}, {}, { sort: { 'createdAt': -1 } });
            if (lastTask) {
                task.id = lastTask.id + 1
            } else {
                task.id = 1
            }

            const newTask = new taskModel(task)
            await newTask.save()
            return newTask 
        }catch(e){
            console.log(e)
            throw new Error(`Error creating task: ${e}`);
        }
    }

    patch(id: number, dataPatch:   {id: number,
                                title: string,
                                descr: string,
                                creatDate: Date,
                                conclDate?: Date,
                                type: string,
                                category?: string,
                                status: ["Pendente", "Em andamento", "Concluída"],
                                userId: number }) {
        throw new Error("Method not implemented.");
    }

    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}