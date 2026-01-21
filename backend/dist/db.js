import { model, Schema } from "mongoose";
const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, requried: true },
    password: { type: String, required: true }
}, {
    timestamps: true,
});
export const User = model('user', userSchema);
//# sourceMappingURL=db.js.map