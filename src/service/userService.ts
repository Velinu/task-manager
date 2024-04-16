import { iUserService } from "src/interfaces/user/userInterface";
import { User } from "../model/user/userClass";
import { userModel } from "../model/user/userModel";

class userService implements iUserService{

    async getById(id: number) {
        try{
            const res = await userModel.find({id: id}, {_id: 0})
            if (res.length == 0){
                throw new Error("No category found");
            } 
            return res
        }catch(e){
            throw new Error("User not found");
        }
        
    }

    async getAll() {
        try{
            const res = await userModel.find({}, {_id: 0})
            if (res.length == 0){
                throw new Error();
            } 
            return res 
        }catch(e){
            throw new Error();
        }
    }

    async post(user: User) {
        try{
            const lastUser = await userModel.findOne({}, {}, { sort: { id: -1 } });
            if (lastUser) {
                user.id = lastUser.id + 1
            } else {
                user.id = 1
            }

            const newUser = new userModel(user)
            await newUser.save()
            return newUser 
        }catch(e){
            console.log(e)
            throw new Error(`Error creating task: ${e}`);
        }
    }

    async patch(id: number,dataPatch: any) {
        try{
            await userModel.findOneAndUpdate({id: id}, dataPatch)
            const userPatch = await userModel.find({id: id}, {_id: 0})
            return userPatch;
        }catch(e) {
            throw new Error(`Error patching task: ${e}`);
        }
    }

    async delete(id: number) {
       try{
            await userModel.deleteOne({id: id})
            return
       }catch(e){
            throw new Error(`Error delete task: ${e}`)
       }
    }
}

export default new userService()