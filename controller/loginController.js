const express = require("express")
const router = express.Router()
const UserModel = require("../model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")



const createToken=(id)=>{
    return jwt.sign({id}, "secureComp", { expiresIn: '1800s' });
}

router.post("/",(req,res)=>{
    const {email,password} = req.body;
    
    UserModel.findOne({email:email}).then((data)=>{
        if(data){
           const token = createToken(data._id)
         
           const validPassword = bcrypt.compare(password, data.password);
            if(validPassword){
                res.cookie('token',token,{httpOnly:true})
        
                res.redirect("/booking")
            }else{
                res.status(400).json({ error: "Invalid Password" });
            }

        }else{
            res.status(404).send("user not found")
        }
    })
})


module.exports = router