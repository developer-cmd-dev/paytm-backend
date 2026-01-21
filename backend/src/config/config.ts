import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;


export const createToken =async (payload:string)=>{
  return jwt.sign({data:payload}, JWT_SECRET, { expiresIn: '1h' });
}


export const verifyToken = async(token:string)=>{
    return jwt.verify(token,JWT_SECRET);
}