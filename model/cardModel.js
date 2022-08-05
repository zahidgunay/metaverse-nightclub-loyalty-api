const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/SC_DB')

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId 
    },
    userID:{
        type:String,
        required:true
    },
    cardNumber:{
        type:Number,
        required:true
    },
    nameSurname:{
        type:String,
        required:true
    },
    exDate:{
        type:String,
        required:true
    },
    cvv:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const cardModel = mongoose.model("Card",cardSchema)
module.exports = cardModel