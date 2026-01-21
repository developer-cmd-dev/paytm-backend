import { Schema } from "mongoose";
import type { IUser } from "./types/types.js";
export declare const User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export declare const Account: import("mongoose").Model<{
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
}, import("mongoose").Document<unknown, {}, {
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        balance: number;
        userId?: import("mongoose").Types.ObjectId | null;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        balance: number;
        userId?: import("mongoose").Types.ObjectId | null;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    balance: number;
    userId?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map