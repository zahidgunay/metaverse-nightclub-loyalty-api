const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/SC_DB');


const Schema = mongoose.Schema;


const userSchema = new Schema({
    id:{ type: mongoose.Schema.Types.ObjectId },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

const UserModel = mongoose.model("User",userSchema)
module.exports= UserModel;