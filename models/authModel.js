import mongoose from "mongoose";


const authSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String},
    status: {type: Boolean}

})

export default mongoose.model('auth',authSchema)