const exp = require("express")
const {hash,compare} = require("bcrypt")
const userapi = exp.Router()
const teachers = require("../Models/teacher.model")

userapi.post("/register", async(req,res)=>{
    const {name,email,password} = req.body
    let res = await teachers.findOne({email})
    if(res){
        res.send({message:"The email already exists" , success:false})
    }
    else{
        let hashedpwd = hash(password , 6)
        let newteacher = new teachers({
            name:name,
            email:email,
            password:hashedpwd
        })

        newteacher.save()
        .then(()=>{
            res.send({message:"registered successfully" , success:true})
        })
        .catch((err) =>{
            console.log(err.message)
            res.send({message:"Some error ocurred" , success:false})
        })
    }


})

userapi.post("/login", async(req,res)=>{
    const {email,password} = req.body
    let teacher = await teachers.findOne({email})
    if(res){
        let verified = compare(password,teacher.password)
        if(verified){
            res.send({success:true,message:"logged in",})
        }
        else{
            res.send({success:false,message:"Wrong password"})
        }
    }
    else{
        res.send({success:false,message:"Invalid credentials"})
    }
})


module.exports = userapi

