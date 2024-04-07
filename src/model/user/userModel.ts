import { model } from "mongoose";
import userSchema from "./userSchema";
import { IUser } from "src/interfaces/user/userInterface";

export const userModel = model<IUser>('User', userSchema)