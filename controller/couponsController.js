const express = require("express")
const router = express.Router()
const couponsModel = require("../model/couponsModel")

router.get("/", (req, res) => {

    couponsModel.find({ userID: res.locals.usrID }).then((couponData) => {
            
            res.status(200).json(couponData)

    })
})

module.exports = router