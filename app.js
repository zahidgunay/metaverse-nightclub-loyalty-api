const express = require("express")
const app = express()


//Swagger
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

// Controller

const homeController = require("./controller/homeController")
app.use("/",homeController)






app.listen(3000,()=>console.log("server listen 3000"))