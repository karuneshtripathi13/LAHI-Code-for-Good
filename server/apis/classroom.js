const exp = require("express")
const classroomApi = exp.Router()
const sendSms = require('../controller/smsController')
const classrooms = require("../Models/classroom.model")
classroomApi.post("/sendSms" , async (req,res)=>{
    const classroomId = req.body.classroomId
    const classroom = await classrooms.findOne({ _id: classroomId })
    sendSms([{mobile: '+919618210245'},{mobile: '+918250299834'}], '13th September 2:30 PM', req.body.meet_link)
    // await sendSms(classroom.students, '13th September 2:30 PM', req.body.meetLink)
})
module.exports = classroomApi