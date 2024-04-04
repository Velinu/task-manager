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

    async patch(dataPatch: Task) {
        try{
            const taskPatch = await taskModel.findOneAndUpdate({id: dataPatch.id}, dataPatch)
            return taskPatch;
        }catch(e) {
            throw new Error(`Error patching task: ${e}`);
        }
    }

    async delete(id: number) {
       try{
            const taskDelete = await taskModel.deleteOne({id: id})
            return taskDelete
       }catch(e){
            throw new Error(`Error delete task: ${e}`)
       }
    }
}

export default new taskService()