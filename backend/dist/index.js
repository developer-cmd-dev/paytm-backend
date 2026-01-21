import express, {} from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { User } from './db.js';
import { router } from './routes/mainRouter.js';
import cors from 'cors';
config();
const MONGO_URL = process.env.MONGO_URL;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', router);
mongoose.connect(MONGO_URL).then(() => {
    console.log('db connected');
    app.listen(3000, () => console.log("Server is listen on -", 3000));
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map