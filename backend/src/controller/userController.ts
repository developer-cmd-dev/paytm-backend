import express, { type Request, type Response } from 'express';
import * as z from 'zod';
import { Account, User } from '../db.js';
import type { IUser } from '../types/types.js';
import { createToken } from '../config/config.js';
import mongoose from 'mongoose'
import { authMiddlware } from '../middleware/middleware.js';


const UserZodSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.email(),
    password: z.string()
})

const UserZodUpdateBody = z.object({
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    email: z.string().optional()
})



async function signupHandler(req: Request, res: Response) {
    try {

        const body = req.body;
        const { success } = UserZodSchema.safeParse(body);
        if (!success) return res.status(404).json("Ivalid input");

        const checkUserAlreadyExist = await User.findOne({ email: body.email });


        if (checkUserAlreadyExist) {
            return res.status(409).json("User already exist");
        }
        const response = await User.create(body);

        Account.create({
            balance:10000,
            userId:response._id
        });
        const accessToken = await createToken(response._id);

        res.status(200).json({ userId: response._id, token: accessToken });
    } catch (error) {
        console.log(error);

        res.status(500).json('something went wrong')
    }
}

// Refactor all usages below signup:

async function signinHandler(req: Request, res: Response) {
    try {
        const userId = req.userId;
        const users = await User.findOne({ _id: userId });
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
    }
}

async function updateHandler(req: Request, res: Response) {
    const body = req.body;
    try {
        const { success } = UserZodUpdateBody.safeParse(body);
        if (!success) {
            return res.status(404).json('Invalid input');
        }

        const updatedUser = await User.updateOne({ _id: body._id }, body);
        res.status(200).json("User updated successfully");

    } catch (error) {
        res.status(500).json("something went wrong");
    }
}

async function bulkHandler(req: Request, res: Response) {
    const filter = req.query.filter || " ";
    try {
        const response = await User.find()
        res.json(response);
    } catch (error) {
        console.log(error)
    }
}


export { signinHandler,signupHandler,updateHandler,bulkHandler };