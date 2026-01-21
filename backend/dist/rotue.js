import express from 'express';
import { User } from './db.js';
export const router = express.Router();
router.post('/signin', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
        const findUser = await User.findOne({
            email: email,
        });
        if (!findUser) {
            const response = await User.create([
                {
                    firstname: firstname,
                    lastname: lastname,
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
//# sourceMappingURL=rotue.js.map