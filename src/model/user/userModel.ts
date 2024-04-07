import { model } from "mongoose";
import userSchema from "./userSchema";
import { IUser } from "src/interfaces/task/userInterface";

export const userModel = model<IUser>('Task', userSchema)