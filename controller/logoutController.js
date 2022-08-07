const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
res.cookie('jwt','',{maxAge:1});
res.locals.usrID = null;
res.status(200).json({
    "message":"successfully logout"
})
})


module.exports = router