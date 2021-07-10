const exp = require("express")
const userapi = exp.Router()
const teachers = require("../Models/teacher.model")

//http://localhost:4000/teacher/register
userapi.post("/register", async(req,res)=>{
    const {name,email,password} = req.body
    let teacher = await teachers.findOne({email})
    if(teacher){
        res.send({message:"The email already exists" , success: true})
    }
    else{

        let newteacher = new teachers({
            name:name,
            email:email,
            password:password
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

//http://localhost:4000/teacher/login
userapi.post("/login", async(req,res)=>{
    const {email,password} = req.body
    let teacher = await teachers.findOne({email})
    if(teacher){
        
        if(password === teacher.password){
            res.send({success:true,message:"logged in",teacher_id:teacher._id})
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

