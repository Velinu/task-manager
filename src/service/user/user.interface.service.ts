import { UserDTO } from "../../models/user/userDto.class"

export interface userServiceInterface {
    getAll()
    getById(id: number)
    post(user: UserDTO)
}