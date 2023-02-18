const express = require("express")
const router = express.Router()
const userModel = require("../model/userModel")
const ObjectId = require('mongoose').Types.ObjectId; 
router.get("/",(req,res)=>{
        
        userModel.find({_id:ObjectId("62efbf858cba70da7a40b477")}).then((data)=>{
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