const express = require("express")
const router = express.Router()
const UserModel = require("../model/userModel")


router.get("/",(req,res)=>{
    res.status(404).send("404 not found")
})


router.post("/",(req,res)=>{
   const {email,password} = req.body;
    if(!email || !password){
        res.status(400).send("Unfilled fields");
    }
    UserModel.findOne({email:email}).then((usr)=>{
        if(usr){
            res.status(409).send("E-mail already exists")
        }else{
            const newUsr = new UserModel({
                email,
                password
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