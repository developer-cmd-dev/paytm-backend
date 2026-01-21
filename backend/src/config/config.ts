import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import type { ObjectId } from 'mongoose';
import type mongoose from 'mongoose';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;


export const createToken =async (payload:mongoose.Types.ObjectId)=>{
  return jwt.sign({data:payload}, JWT_SECRET, { expiresIn: '1d' });
}


export const verifyToken = async(token:string)=>{
    return jwt.verify(token,JWT_SECRET);
}