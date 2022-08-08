const express = require("express")
const router = express.Router()
const cardModel = require("../model/cardModel")

router.get("/", (req, res) => {

    cardModel.find({ userID: res.locals.usrID }).then((data) => {
        res.status(200).json(data)
       
    })


})


router.post("/", (req, res) => {
    const { cardNumber, nameSurname, exDate, cvv, userID } = req.body;
    cardModel.findOne({ cardNumber: cardNumber }).then((cardData) => {
        if (cardData) {
            res.status(409).json({error:"Card already exists"})
        } else {
            const newCard = new cardModel({
                cardNumber,
                nameSurname,
                exDate,
                cvv,
                userID
            })
            newCard
                .save()
                .then(() => {
                    res.status(201).json({message:"Card registered successfully"})
                })
        }
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