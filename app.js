const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const {auth} = require("./middleware/auth")
const {sessionCheck} = require("./middleware/sessionCheck")

//Swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))



app.use(cookieParser())
app.use(express.json());

// Controller

const homeController = require("./controller/homeController")
app.use("/",sessionCheck,homeController)
const signupController = require("./controller/signupController")
app.use("/signup",auth,signupController)
const loginController = require("./controller/loginController")
app.use("/login",loginController)

const logoutController = require("./controller/logoutController")
app.use("/logout",auth,logoutController)

const profileController = require("./controller/profileController")
app.use("/profile",auth,profileController)

const cardController = require("./controller/cardController")
app.use("/cards",auth,cardController)

const bookingController = require("./controller/bookingController")
app.use("/booking",auth,bookingController)

const couponsController = require("./controller/couponsController")
app.use("/coupons",auth,couponsController)


app.listen(3000,()=>console.log("server listen 3000"))

module.exports = app