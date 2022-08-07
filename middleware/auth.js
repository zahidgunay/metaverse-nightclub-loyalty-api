const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,'gizli',(error,deToken)=>{
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
        res.redirect("/login")
    }

}

module.exports = {auth}