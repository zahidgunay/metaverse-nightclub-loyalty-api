const express = require("express")
const app = express()


//Swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

app.use(express.json());

// Controller

const homeController = require("./controller/homeController")
app.use("/",homeController)
const signupController = require("./controller/signupController")
app.use("/signup",signupController)
const loginController = require("./controller/loginController")
app.use("/login",loginController)





app.listen(3000,()=>console.log("server listen 3000"))