import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../config/config.js";



const authMiddlware = async(req:Request,res:Response,next:NextFunction)=>{

   try {
    const token = req.headers['authorization'];

    const extractedToken = token?.replace("Bearer ","");
    if(!extractedToken) {
        res.status(404).json("invalid token");
        return;
    }
    const payload=await verifyToken(extractedToken) as {data:string};
    req.user=payload.data;
    next();
   } catch (error) {
    
   }


}


export {authMiddlware}