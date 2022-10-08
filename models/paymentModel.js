import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    billingAddress: String,
    state: String,
    city: String,
    pinCode: Number,
    sites: Number,
    amountPerSite: Number,
    total: Number,
    reason: String,
    paymentMode: String,
    paymentStatus: String
    
})

export default mongoose.model('payment', userSchema)