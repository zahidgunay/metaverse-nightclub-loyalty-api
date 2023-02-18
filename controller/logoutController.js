const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
res.cookie('token','',{maxAge:1});
res.locals.usrID = null;
res.sendStatus(200).json({
    "message":"successfully logout"
})
})


module.exports = router