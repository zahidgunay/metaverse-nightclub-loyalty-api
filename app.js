const express = require("express")
const app = express()
const session = require('express-session');


//Swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
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


app.listen(3000,()=>console.log("server listen 3000"))