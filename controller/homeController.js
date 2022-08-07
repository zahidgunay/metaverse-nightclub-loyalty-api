const express =require("express")
const router =express.Router()
const jwt = require("jsonwebtoken")
router.get("/",(req,res)=>{
    const token = req.cookies.jwt
    if(token){
        res.status(200).json({"message":"authorized"})
    }else{
        res.status(401).json({"error":"unauthorized"})

    }
})


module.exports = router