const exp = require("express")
const userapi = exp.Router()
const {hash , compare}  = require("bcrypt")


//import the models we need
const users = require("../Models/usermodel")
const {CreateToken} = require("./auth")


//handling the userlogin
//this is a post method where i get the credentials via body method
//http://localhost:4000/users/login

userapi.post("/login" , async (req,res) => {
    const {email,password} = req.body
    console.log(email,password)

    const user = await users.findOne({email})
    console.log
    (user)
    if(!user){
        res.send({success:false,message:"Email doesnot exist"})
    }
    else{
        result = compare(password,user.password)
        if(result){
            //create a json web token and send that in the response
            console.log(user._id)
            const token = CreateToken(user._id)
            console.log(token)
            res.status(200).send({success:true,message:"LoggedIn Successfully",accessToken:token})
        }
        else{
            res.send({success:false,message:"Incorrect password"})
        }
    }
})

//register route handling
//The user will sens the data in the body of the request
//http://localhost:4000/users/register

userapi.post("/register" , async (req,res)=>{
    const {email,password} = req.body
    console.log(email,password)
    const existeduser = await users.findOne({email})
    if(!existeduser){
        const hashedpwd = await hash(password,10)
        let user = new users({email:email,password:hashedpwd})
        console.log(email,hashedpwd)
        user.save((err) => {
            if(!err) console.log("Saved successfully")
        else console.log("error",err.message)
    })
        res.send({success:true ,message:"registered successfully"})
   }
   else{
    res.send({success:false , messsage:"Email alredy exists"})
   }
})


userapi.post("/getusers",async (req,res)=>{
    const data = await users.find()
    res.send({data})
})

module.exports = userapi