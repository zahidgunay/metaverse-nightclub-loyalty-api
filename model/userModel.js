const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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
userSchema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.password = hash
            next()
          })
        }
      })
    } else {
      return next()
    }
  })





const UserModel = mongoose.model("User",userSchema)
module.exports= UserModel;