import { Schema } from "mongoose";
import { IUser } from "src/interfaces/user/userInterface";
const userSchema: Schema = new Schema<IUser>({
    id: { type: Number, unique: true},
    userName: { type: String, max: 20},
    peso: { type: Number},
    senha: { type: String, min: 8, max: 20},
    email: { type: String, max: 50},
}, {versionKey: false})
export default userSchema