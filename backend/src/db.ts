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


const accountSchema = new Schema({
    balance:{type:Number,default:0,required:true},
    userId:{type:Schema.Types.ObjectId,ref:"User"}
})


export const User = model<IUser>('user',userSchema);

export const Account = model('account',accountSchema);
