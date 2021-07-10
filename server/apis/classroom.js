const exp = require("express")
const classroomApi = exp.Router()
const {sendSms} = require('../controller/smsController')
const classrooms = require("../Models/classroom.model")
const teachers = require("../Models/teacher.model")



classroomApi.post("/sendLink" , async (req,res)=>{
    const classroomId = req.body.classroomId
    const classroom = await classrooms.findOne({ _id: classroomId })
    if(!classroom)
    {
        res.send({message:"Class not present",success:false})
        return
    }
    let studs = JSON.parse(JSON.stringify(classroom.students))
        console.log(studs)
        studs.forEach(stud => {
            stud.isPresent = false
        });
    await classrooms.findByIdAndUpdate(classroomId,{
        $set:{meetLink: req.body.meet_link, students: studs}
    }, (err)=>{
        if(err){res.send({message:"error occured",success:false})}
    })
    // sendSms([{mobile: '+918250299834'},{mobile: '+919772208820'}], req.body.date_time, "http://localhost:3000/"+classroomId)
    sendSms(classroom.students, req.body.date_time, "http://localhost:4000/goToLink/"+classroomId)
    res.send({"success": true,message:"sent successfully"})
})


//http://localhost:4000/classroom/addclassroom/:teacherid

classroomApi.post("/addclassroom/:teacherid" , async(req,res)=>{
    let newclassroom = new classrooms({
        teacher_id:req.params.teacherid,
        classname:req.body.classname,
        students:req.body.students
    })
    newclassroom.save()
    .then(()=>{
        res.send({message:"Classroom created" , success:true, classroom_id: newclassroom._id})
    })
    .catch((err)=>{
        res.send({message:"error occured", success:false})
    })

})


classroomApi.get("/getclassrooms/:teacherid", async(req,res)=>{
    let teacher = await teachers.findById(req.params.teacherid)
    if(teacher){
        let data = await classrooms.find({teacher_id:req.params.teacherid})
        
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

classroomApi.get("/getAttendance/:classId", async(req,res)=>{
    let classroom = await classrooms.findById(req.params.classId)
    var attendanceList = []
    if(classroom) {
        classroom.students.forEach(student => {
            if(student.isPresent) { attendanceList.push(student.name) }
        })
        res.send({count: attendanceList.length, students: attendanceList})
    }
    else{
        res.send({message:"Classroom does not exist"})
    }

})
module.exports = classroomApi