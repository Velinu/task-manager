import { User } from "../../models/user.model"

class userService{
    async getAll(){
        const findAll = await User.find()
        return findAll
    }
    async getById(id: number){
        const user = await User.findById(id)
        return user
    }
    async post(newUser: {
        Id: number
        username: string
        peso?: number
        senha: string
        email: string
    }){
        const saveUser = new User(newUser)
        await saveUser.save()
    }
    async patch(id: number, dataPatch: {
        username?: string
        peso?: number
        senha?: string
        email?: string
    }){
        const updatedBook = User.findOneAndUpdate({id: id}, dataPatch)
    }

    async delete(id: number){
        const user = User.deleteOne({id: id})
        return user
    }
}