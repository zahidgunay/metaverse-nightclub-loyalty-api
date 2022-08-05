const express = require("express")
const router = express.Router()

const bookingModel = require("../model/bookingModel")

router.get("/",(req,res)=>{
    const usrID = req.body.userID
    bookingModel.find({userID:usrID}).then((data)=>{
        res.send(data)
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
            res.status(201).send("reservation successfully created")
        })
})


module.exports = router