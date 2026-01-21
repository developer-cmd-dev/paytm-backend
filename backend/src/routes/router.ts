import express from 'express'
import { signupHandler } from '../controller/userController.js';
import { authMiddlware } from '../middleware/middleware.js';
import { balanceHandler, transferHandler } from '../controller/accountController.js';


export const router = express.Router();


router.post('/signup',signupHandler);
router.post('/account/transfer',authMiddlware,transferHandler);
router.get('/account/balance',authMiddlware,balanceHandler);