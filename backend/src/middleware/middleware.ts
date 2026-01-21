import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../config/config.js";
import type { ObjectId } from "mongoose";
import type mongoose from "mongoose";



const authMiddlware = async(req:Request,res:Response,next:NextFunction)=>{

   try {
    const token = req.headers['authorization'];

    const extractedToken = token?.replace("Bearer ","");
    if(!extractedToken) {
        res.status(404).json("invalid token");
        return;
    }
    const payload=await verifyToken(extractedToken) as {data:mongoose.Types.ObjectId};
    req.userId=payload.data;
    next();
   } catch (error) {
     console.error("Auth error:", error);
    return res.status(401).json("Invalid or expired token");
   }


}


export {authMiddlware}