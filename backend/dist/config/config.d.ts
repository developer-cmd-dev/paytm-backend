import jwt from 'jsonwebtoken';
export declare const createToken: (payload: string) => Promise<string>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload>;
//# sourceMappingURL=config.d.ts.map