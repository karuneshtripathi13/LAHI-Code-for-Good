const mongoose = require("mongoose")

let teacherSchema = new mongoose.Schema({
    
   name:String,
   email:{
       type:String,
       required:true,
       unique:true
   },
   password:String

},
    {timestamps:true}
)

let teachers = mongoose.model('teachers',teacherSchema)
module.exports = teachers