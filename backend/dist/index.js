import express, {} from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { User } from './db.js';
const app = express();
config();
app.use(bodyParser.json());
const MONGO_URL = process.env.MONGO_URL;
app.post('/signin', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const findUser = await User.findOne({
            email: email,
        });
        if (!findUser) {
            const response = await User.create([
                {
                    name: name,
                    email: email,
                    password: password
                }
            ]);
            res.status(200).json(response);
        }
        else {
            res.status(400).json("User already exist");
        }
    }
    catch (error) {
        console.log(error);
    }
});
mongoose.connect("mongodb://127.0.0.1:27017/paytm?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.6.0").then(() => {
    console.log('db connected');
    app.listen(3000, () => console.log("Server is listen on -", 3000));
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map