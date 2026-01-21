import express, {} from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { User } from './db.js';
import { router } from './rotue.js';
const app = express();
config();
const MONGO_URL = process.env.MONGO_URL;
app.use(bodyParser.json());
app.use('/api/v1', router);
mongoose.connect("mongodb://127.0.0.1:27017/paytm?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.6.0").then(() => {
    console.log('db connected');
    app.listen(3000, () => console.log("Server is listen on -", 3000));
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map