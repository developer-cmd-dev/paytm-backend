import jwt from 'jsonwebtoken';
import type mongoose from 'mongoose';
export declare const createToken: (payload: mongoose.Types.ObjectId) => Promise<string>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload>;
//# sourceMappingURL=config.d.ts.map