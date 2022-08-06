const express = require("express")
const router = express.Router()
const UserModel = require("../model/userModel")



router.post("/",(req,res)=>{
  let {email,password,name} = req.body;
    if(!email || !password){
        res.status(400).send("Unfilled fields");
    }
    UserModel.findOne({email:email}).then((usr)=>{
        if(usr){
            res.status(409).send("E-mail already exists")
        }else{
            
            const newUsr = new UserModel({
                email,
                password,
                name
            })

            newUsr
                
                .save()
                .then(()=>{
                    res.status(201).send("User registered successfully")
                })
        }
    })



})

module.exports = router