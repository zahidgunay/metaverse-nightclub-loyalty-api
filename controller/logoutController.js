const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
  req.logout();
  res.redirect('/').send("logout oldu")
  console.log("logout oldu biri")
})


module.exports = router