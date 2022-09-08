import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model('users', userSchema)