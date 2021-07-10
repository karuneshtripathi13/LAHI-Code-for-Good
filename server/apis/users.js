const exp = require("express")
const {hash,compare} = require("bcrypt")
const userapi = exp.Router()
const {createToken , verification} = requier("./auth")
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


userapi.post("/addclassroom/:teacherid" , async(req,res)=>{
    let newclassroom = new classrooms({
        teacher_id:req.params.teacherid,
        classname:req.body.classanme,
        grade:req.body.grade,
        students:req.body.students
    })
    newclassroom.save()
    .then(()=>{
        res.send({message:"Classroom created" , success:true})
    })
    .catch((err)=>{
        res.send({message:"error occured", success:false})
    })

})


userapi.get("/getclassrooms/:teacherid", async(req,res)=>{
    let res = await teachers.findById(req.params.teacherid)
    if(res){
        let data = classrooms.find({teacher_id:req.params.id})
        if(data){
            res.send({data:data})
        }
        else{
            res.send({message:"Add classrooms"})
        }
    }
    else{
        res.send({message:"teacher doesnot exists"})
    }

})