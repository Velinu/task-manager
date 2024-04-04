import { iTaskController } from "../interfaces/task/taskInterfaces";
import taskService from "../service/taskService";

class taskController implements iTaskController{
    async getAll(req: any, res: any) {
        try{
            const tasks = await taskService.getAll()
            res.send(tasks)
        }catch(e){
            res.send(`error`)
        }
    }
}

export default new taskController()