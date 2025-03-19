import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String, 
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String, 
        enum: ["buyer", "seller", "admin"], 
        required: true 
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model("User", UserSchema);

export default User;
