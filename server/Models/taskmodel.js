const mongoose  = require("mongoose")

const taskschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    task_name:{
        type:String,
        required:true
    },
    task_description:{
        type:String
    },
    date:{
        type:String,
        default:""
    },
    status:{
        type:Boolean,
        default:false
    }
},
    {timestamps:true}
)



const tasks = mongoose.model("tasks",taskschema)
module.exports = tasks