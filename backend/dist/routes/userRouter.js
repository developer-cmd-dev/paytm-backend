import express, {} from 'express';
import * as z from 'zod';
import { User } from '../db.js';
import { createToken } from '../config/config.js';
import mongoose from 'mongoose';
import { authMiddlware } from '../middleware/middleware.js';
const userRouter = express.Router();
const UserZodSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.email(),
    password: z.string()
});
const UserZodUpdateBody = z.object({
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    email: z.string().optional()
});
userRouter.post('/signup', async (req, res) => {
    try {
        const body = req.body;
        const { success } = UserZodSchema.safeParse(body);
        if (!success)
            res.status(404).json("Ivalid input");
        const checkUserAlreadyExist = await User.findOne({ email: body.email });
        if (checkUserAlreadyExist) {
            res.status(409).json("User already exist");
            return;
        }
        const response = await User.create(body);
        const accessToken = await createToken(response.email);
        res.status(200).json({ userId: response._id, token: accessToken });
    }
    catch (error) {
        console.log(error);
        res.status(500).json('something went wrong');
    }
});
userRouter.get('/signin', authMiddlware, async (req, res) => {
    try {
        const getUser = req.user;
        const users = await User.findOne({ email: getUser });
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
    }
});
userRouter.put('/update', authMiddlware, async (req, res) => {
    const body = req.body;
    try {
        const { success } = UserZodUpdateBody.safeParse(body);
        if (!success) {
            res.status(404).json('Invalid input');
        }
        const updatedUser = await User.updateOne({ _id: body._id }, body);
        res.status(200).json("User updated successfully");
    }
    catch (error) {
        res.status(500).json("something went wrong");
    }
});
userRouter.get('/', async (req, res) => {
    const query = req.query.name;
    console.log(query);
    res.send('query');
});
export { userRouter };
//# sourceMappingURL=userRouter.js.map