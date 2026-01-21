import express, { type Request, type Response } from 'express'
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { User } from './db.js';
import { router as v1Router } from './routes/router.js';
import cors from 'cors';
import morgan from 'morgan'


config()

const MONGO_URL = process.env.MONGO_URL as string;

const app = express();





app.use(bodyParser.json());
app.use(cors());

app.use(morgan('dev'))





mongoose.connect(MONGO_URL).then(()=>{
    console.log('db connected');
    app.listen(3000,()=>console.log("Server is listen on -",3000));
}).catch((error)=>console.log(error));



app.use('/api/v1',v1Router);


