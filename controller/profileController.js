const express = require("express")
const router = express.Router()
const userModel = require("../model/userModel")

router.get("/",(req,res)=>{
        userModel.find({_id:res.locals.usrID}).then((data)=>{
            data.forEach(function(profileData, index) {
                res.status(200).json({
                    email:profileData.email,
                    name:profileData.name,
                    profilePic:profileData.profilePhoto,
                    date:profileData.date
                })
              });
      
    })
 

})

module.exports =router;