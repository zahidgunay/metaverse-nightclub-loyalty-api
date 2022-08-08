const jwt = require("jsonwebtoken")

const sessionCheck = (req,res,next)=>{
    const token = req.cookies.token
    if(token){
        res.locals.tokenState = true;
        next()
    }else{
        res.locals.tokenState = false;
        next()
    }
}

module.exports = {sessionCheck}