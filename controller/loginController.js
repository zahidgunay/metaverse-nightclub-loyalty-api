const express = require("express")
const router = express.Router()
const UserModel = require("../model/userModel");
const path = require('path');
const jwt = require('jsonwebtoken');
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '/', 'login.html'));
})

const maxAge = 60*60*24
const createToken=(id)=>{
    return jwt.sign({id}, "gizli", { expiresIn: '1800s' });
}

router.post("/",(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email,password:password}).then((data)=>{
        if(data){
           const token = createToken(data._id)
           console.log(token)
            

            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
        
            res.redirect("/booking")
        }else{
            res.status(402).send("user not found")
        }
    })
})


module.exports = router