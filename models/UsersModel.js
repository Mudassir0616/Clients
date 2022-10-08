import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    companyName: String,
    website: String,
    buisnessCategory: String,
    companyEmail: String,
    companyNumber: Number,
    state: String,
    city: String,
    pincode: Number,
    sites: Number,
    paymentStatus: String,
    gst: Number,
    fax: Number

})

export default mongoose.model('users', userSchema)