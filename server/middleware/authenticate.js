const jwt = require('jsonwebtoken')
const User = require('../model/dbSchema')

const Authenticate = async(req,res,next)=>{
    try {
        const token = req.cookies.authtoken;
        const verify = jwt.verify(token,process.env.KEY)

        const rootUser = await User.findOne({
            _id:verify._id, "tokens.token": token
        })

        if(!rootUser){throw new Error("User not found")}

        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id

        next()
    } catch (error) {
        res.status(401).send("Unauthorised")
        console.log(error)
    }
}

module.exports = Authenticate;