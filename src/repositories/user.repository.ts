
import { BaseRepository } from "../repositories/base.repository";
import userModel from "../models/user.schema"
import { User } from "src/models/user.schema";

export class UserRepository extends BaseRepository<User> {
    constructor() {
        super(userModel);
    }
    
}
