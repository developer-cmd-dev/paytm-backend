import { model, Schema } from "mongoose";
const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, requried: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
});
const accountSchema = new Schema({
    balance: { type: Number, default: 0, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" }
});
export const User = model('user', userSchema);
export const Account = model('account', accountSchema);
//# sourceMappingURL=db.js.map