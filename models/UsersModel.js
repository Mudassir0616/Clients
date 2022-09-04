import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    number: String,
    selectDate: {
        type: Date,
        default: new Date()
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model('users', userSchema)