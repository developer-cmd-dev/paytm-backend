import express from 'express';
import type{ Request,Response } from 'express';
import { User } from '../db.js';
import { router as userRouter } from './userRouter.js';
 const router = express.Router();

router.post('/user',userRouter);

export  {router};