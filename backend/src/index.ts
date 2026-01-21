import express, { type Request, type Response } from 'express'
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { User } from './db.js';
import {router as v1Router}  from './routes/mainRouter.js';
import cors from 'cors';

const app = express();
config()





app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1',v1Router);




















mongoose.connect("mongodb://127.0.0.1:27017/paytm?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.6.0").then(()=>{
    console.log('db connected');
    app.listen(3000,()=>console.log("Server is listen on -",3000));
}).catch((error)=>console.log(error));


