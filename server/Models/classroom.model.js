const mongoose  = require("mongoose")

const classroomSchema = new mongoose.Schema(
    {
        teacher_id:{
            type:String,
            required:true
        },
        classname:{
            type:String,
            default:""
        },
        students:[{name:String,
            email_id:String,
            mobile:String,isPresent: {type : Boolean, default : false}}],
        meetLink: { type: String, default: "" },
        pollLink:{ type:String , default:""}
    },
    {timestamps:true}
)




const classrooms = mongoose.model("classrooms",classroomSchema)
module.exports = classrooms