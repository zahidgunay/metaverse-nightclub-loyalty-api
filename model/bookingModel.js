const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/SC_DB")

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    userID:{
        type:String,
        required:true
    },
    bookingDate:{
        type:String,
        required:true
    },
    person:{
        type:Number,
        required:true
    },
    bookingNote:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const bookingModel = mongoose.model("Booking",bookingSchema)
module.exports = bookingModel;