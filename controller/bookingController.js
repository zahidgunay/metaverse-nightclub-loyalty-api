const express = require("express")
const router = express.Router()
const bookingModel = require("../model/bookingModel")

router.get("/",(req,res)=>{

        bookingModel.find({userID:res.locals.usrID}).then((data)=>{
            res.status(200).json(data)
        })
  
 

})


router.post("/",(req,res)=>{
    const {userID,bookingDate,person,bookingNote} = req.body
    const newBooking = new bookingModel({
            userID,
            bookingDate,
            person,
            bookingNote

    })
    newBooking
        .save()
        .then(()=>{
            res.status(201).json({message:"reservation successfully created"})
        })
})

router.delete("/", (req, res) => {
    const itemID = req.body.itemID
    cardModel.deleteOne({ _id: itemID }, (error) => {
        if (error) {
            throw error
        } else {
            res.status(202).json({message:"Successfully deleted"})
        }
    })
})





module.exports = router