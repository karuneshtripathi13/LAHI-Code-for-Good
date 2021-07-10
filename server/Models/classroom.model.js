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
        Students:[{name:String,email_id:String,mobile:Number}]
    },
    {timestamps:true}
)



const classroom = mongoose.model("classroom",classroomSchema)
module.exports = classroom