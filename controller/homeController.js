const express =require("express")
const router =express.Router()

router.get("/",(req,res)=>{
  
    if(res.locals.tokenState){
        res.status(200).json({"message":"authorized"})
    }else{
        res.status(401).json({"error":"unauthorized"})

    }
})


module.exports = router