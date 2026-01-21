import { model, Schema } from "mongoose";
import type { IUser } from "./types/types.js";


const userSchema = new Schema<IUser>({
    firstname:{type:String,required:true},
    lastname:String,
    email:{type:String,requried:true,unique:true},
    password:{type:String,required:true}
},
{
    timestamps:true,
})



export const User = model<IUser>('user',userSchema);
