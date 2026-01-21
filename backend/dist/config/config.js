import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
export const createToken = async (payload) => {
    return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: '1d' });
};
export const verifyToken = async (token) => {
    return jwt.verify(token, JWT_SECRET);
};
//# sourceMappingURL=config.js.map