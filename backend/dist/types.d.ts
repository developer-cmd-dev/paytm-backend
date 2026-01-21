import type { Document } from "mongoose";
export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}
//# sourceMappingURL=types.d.ts.map