import type { Request, Response } from "express";
import mongoose from "mongoose";
import { Account } from "../db.js";


const transferHandler = async (req: Request, res: Response) => {
    const session = await mongoose.startSession()

    try {
        session.startTransaction();
        const { to, balance } = req.body;
        const getAccount = await Account.findOne({ userId: req.userId }).session(session);
        if (!getAccount || getAccount.balance < balance) {
            res.status(500).json("Insufficient Balance")
            await session.abortTransaction();
            return 
        };

        const findReciverAccount = await Account.findOne({userId:to}).session(session);
        if (!findReciverAccount) {
            res.status(404).json("Invalid account")
            await session.abortTransaction();
            return 
        };

        await Account.updateOne({userId:req.userId}, { $inc: { balance: -balance } }).session(session);
        await Account.updateOne({userId:to}, { $inc: { balance: balance } }).session(session);
        await session.commitTransaction();
        res.status(200).json("Payment successfully transferred");
    } catch (error) {
        await session.abortTransaction();
        console.log(error);
    } finally {
        await session.endSession();
    }
}

const balanceHandler = async(req:Request,res:Response)=>{
    try {
        const response = await Account.findOne({user:req.userId});
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong');
    }
}


export { transferHandler,balanceHandler }