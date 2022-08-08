const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.cookies.token
    if(token){
        jwt.verify(token,'secureComp',(error,deToken)=>{
            if(error){
                res.send(error);
                res.locals.user = null
            }else{
                let usrID = deToken.id;
                res.locals.usrID = usrID
                next()
            }
        })
    }else{
        res.json({message:"Redirect /login"})
    }

}

module.exports = {auth}