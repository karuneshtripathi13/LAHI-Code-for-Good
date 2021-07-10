const exp = require("express")
const classroomApi = exp.Router()
const sendSms = require('../controller/smsController')
const classrooms = require("../Models/classroom.model")
const teachers = require("../Models/teacher.model")



classroomApi.post("/sendSms" , async (req,res)=>{
    const classroomId = req.body.classroomId
    const classroom = await classrooms.findOne({ _id: classroomId })
    sendSms([{mobile: '+919618210245'},{mobile: '+918250299834'}], '13th September 2:30 PM', req.body.meet_link)
    // await sendSms(classroom.students, '13th September 2:30 PM', req.body.meetLink)
})


//http://localhost:4000/classroom/addclassroom/:teacherid
classroomApi.post("/addclassroom/:teacherid" , async(req,res)=>{
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


classroomApi.get("/getclassrooms/:teacherid", async(req,res)=>{
    let teacher = await teachers.findById(req.params.teacherid)
    if(teacher){
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

module.exports = classroomApi