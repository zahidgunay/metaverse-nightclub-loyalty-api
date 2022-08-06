const express = require("express")
const app = express()


//Swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))


app.get("/secret",(req,res)=>{
  res.send("hi secret")
})

app.use(express.json());

// Controller

const homeController = require("./controller/homeController")
app.use("/",homeController)
const signupController = require("./controller/signupController")
app.use("/signup",signupController)
const loginController = require("./controller/loginController")
app.use("/login",loginController)

const logoutController = require("./controller/logoutController")
app.use("/logout",logoutController)

const cardController = require("./controller/cardController")
app.use("/cards",cardController)

const bookingController = require("./controller/bookingController")
app.use("/booking",bookingController)
app.listen(3000,()=>console.log("server listen 3000"))