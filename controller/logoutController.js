const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    req.session.user.destroy()
    if(!req.session.user){
        res.status(200).send("logout")
    }else{
        res.status(401).send("unauthorized")
    }
})


module.exports = router