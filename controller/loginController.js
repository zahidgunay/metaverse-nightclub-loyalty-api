const express = require("express")
const router = express.Router()
const UserModel = require("../model/userModel");



router.post("/",(req,res)=>{
    const {email,password} = req.body;
    UserModel.findOne({email:email,password:password}).then((data)=>{
        if(data){
            req.session.user = data._id;
            res.status(200).send("session id:" + gitreq.session.user)

        }else{
            res.status(401).send("user not found")
        }
    })
})


module.exports = router