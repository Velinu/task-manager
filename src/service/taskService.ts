import { iTaskService } from "../interfaces/task/taskInterfaces";
import { Task } from "../model/task/taskClass";
import { taskModel } from "../model/task/taskModel";

class taskService implements iTaskService{

    async getById(id: number) {
        try{
            const res = await taskModel.find({id: id}, {_id: 0})
            if (res.length == 0){
                throw new Error();
            } 
            return res
        }catch(e){
            throw new Error();
        }
        
    }

    async getAll() {
        try{
            const res = await taskModel.find()
            if (res.length == 0){
                throw new Error();
            } 
            return res 
        }catch(e){
            throw new Error();
        }
    }

    async post(task: Task) {
        try{
            const lastTask = await taskModel.findOne({}, {_id: 0}, { sort: { id: -1 } });
            if (lastTask) {
                task.id = lastTask.id + 1
            } else {
                task.id = 1
            }
            if(task.status != "Pendente" && task.status != "Em andamento" && task.status != "Concluída"){
                throw new Error()
            }
            const newTask = new taskModel(task)
            await newTask.save()
            return newTask 
        }catch(e){
            console.log(e)
            throw new Error(`Error creating task: ${e}`);
        }
    }

    async patch(id: number,dataPatch: any) {
        try{
            await taskModel.findOneAndUpdate({id: id}, dataPatch)
            const taskPatch = await this.getById(id)
            return taskPatch;
        }catch(e) {
            throw new Error(`Error patching task: ${e}`);
        }
    }

    async delete(id: number) {
       try{
            const taskDelete = await taskModel.deleteOne({id: id}, {_id: 0})
            return taskDelete
       }catch(e){
            throw new Error(`Error delete task: ${e}`)
       }
    }

    async getAllByCategory(categoryId: number){
        try{
            let arr: Task[] = [];
            const res = await taskModel.find({categoryId: categoryId}, {_id: 0})
            res.forEach(function(e) {
                arr.push()
            })
            const ret = arr.find((e) => e.categoryId === categoryId) 

            if (res.length == 0){
                throw new Error();
            } 
            return ret 
        }catch(e){
            throw new Error();
        }
    }
}

export default new taskService()