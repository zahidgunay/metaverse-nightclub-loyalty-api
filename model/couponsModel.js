const mongoose = require("mongoose");
const { db } = require("./bookingModel");
mongoose.connect("mongodb://127.0.0.1:27017/SC_DB")

const Schema = mongoose.Schema;

const couponsSchema = new Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId
    },
    userID:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    exDate:{
        type:String,
        required:true
    }
})

const couponsModel = mongoose.model("Coupon",couponsSchema)
module.exports = couponsModel


