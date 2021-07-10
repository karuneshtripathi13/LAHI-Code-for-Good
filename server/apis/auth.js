require("dotenv").config()
const {sign , verify} = require("jsonwebtoken")


const CreateToken = (userID) => {
    return sign({id:userID} , process.env.SECRET_KEY , {
        expiresIn:"7d"
    })
}


//This is the middleware to deal with the authorisation for protected routes
const verification = async (req,res,next)=>{
    try{
        authHeader = req.headers.authorization
        console.log(authHeader)
        if(authHeader){
            const token = authHeader.split(" ")[1]
            await verify(token , process.env.SECRET_KEY , (err , data)=>{
            if(err){
                res.send({message:"The token is not valid"})
            }
            else{
                req.user= data
                console.log("data is" , data)
                next()
            }
        })
        }
        else{
            res.send({message:"you need to login"})
        }
    }
    catch(err){
        res.send({messasge:"Error occurred" })
        console.log(err.message)
    }

}


module.exports = { CreateToken,verification}