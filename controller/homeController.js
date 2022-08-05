const express =require("express")
const router =express.Router()
router.get("/",(req,res)=>{
 if(req.session.user){
    res.status(200).send("kullanıcı giriş yapmış"+req.session.user)
 }else{
    res.status(200).send("giriş yapmamış")
 }
})


module.exports = router