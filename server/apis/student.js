const exp = require("express")
const studentApi = exp.Router()
const classroom = require("../Models/classroom.model")

studentApi.delete("/delete/:classid" , async(req,res)=>{

    const studentid = req.body.studentId
    const cls= await classroom.findById(req.params.classid)
    if(cls){
        let studs = cls.students
        studs = studs.filter((stud)=>{
            return stud._id !== studentid
        })
        await classroom.findByIdAndUpdate(req.params.classid,{
            $set:{students:studs}
        }, (err)=>{
            if(err){
                res.send({message:"error occured",success:false})
            }
            else{
                res.send({message:"de;eted sucessfully" , success:true})
            }
        })
    }

})

studentApi.post("/addstudent/:classid" , async(req,res)=>{
    let student = req.body
    let cls = await classroom.findById(req.params.classid)
    if(cls){
        let studs = cls.students
        studs = studs.push(student)
        await classroom.findByIdAndUpdate(req.params.classid,{
            $set:{students:studs}
        }, (err)=>{
            if(err){
                res.send({message:"error occured",success:false})
            }
            else{
                res.send({message:"deleted sucessfully" , success:true})
            }
        })
    }
    else{
        res.send({message:"error occured" , success:false})
    }
})



module.exports = studentApi