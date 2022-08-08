const express = require("express")
const router = express.Router()
const UserModel = require("../model/userModel")



router.post("/",(req,res)=>{
    if(!res.locals.tokenState){
  let {email,password,name} = req.body;
    if(!email || !password){
        res.status(400).json({error:"Unfilled fields"});
    }
    UserModel.findOne({email:email}).then((usr)=>{
        if(usr){
            res.status(409).json({error:"E-mail already exists"})
        }else{
            
            const newUsr = new UserModel({
                email,
                password,
                name
            })

            newUsr
                
                .save()
                .then(()=>{
                    res.status(201).json({error:"User registered successfully"})
                })
        }
    })

    }else{
        res.status(401).json({error:"unauthorized"})
    }

})

module.exports = router