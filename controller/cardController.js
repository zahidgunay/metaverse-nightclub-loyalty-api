const express = require("express")
const router = express.Router()
const cardModel = require("../model/cardModel")

// Session verisi ile find yapılacak
router.get("/",(req,res)=>{
    const usrID = req.body.userID;
    cardModel.find({userID:usrID}).then((data)=>{
        res.send(data)
    })

})


router.post("/",(req,res)=>{
    const {cardNumber,nameSurname,exDate,cvv,userID}=req.body;
    cardModel.findOne({cardNumber:cardNumber}).then((cardData)=>{
        if(cardData){
            res.status(409).send("Card already exists")
        }else{
            const newCard = new cardModel({
                    cardNumber,
                    nameSurname,
                    exDate,
                    cvv,
                    userID
            })
            newCard
                .save()
                .then(()=>{
                    res.status(201).send("Card registered successfully")
                })
        }
    })
})


router.delete("/",(req,res)=>{
    const itemID = req.body.itemID
    cardModel.deleteOne({_id:itemID},(error)=>{
         if(error){
            throw error
         }else{
            res.status(202).send("Successfully deleted")
         }
    })
})














module.exports=router