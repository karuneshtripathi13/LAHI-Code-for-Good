const mongoose  = require("mongoose")

const classroomSchema = new mongoose.Schema(
    {
        teacher_id:{
            type:String,
            required:true
        },
        grade:{
            type:Number,
            required:true
        },
        classname:{
            type:String,
            default:""
        },
        students:[{name:String,email_id:String,mobile:Number}]
    },
    {timestamps:true}
)



const classrooms = mongoose.model("classrooms",classroomSchema)
module.exports = classrooms