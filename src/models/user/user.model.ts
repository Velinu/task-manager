import mongoose from "mongoose";
import { userSchema } from "../../Schemas/user.schema";

export const User = mongoose.model('Users', userSchema)