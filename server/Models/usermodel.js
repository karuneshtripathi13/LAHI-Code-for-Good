const mongoose = require("mongoose")

let user = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)

let users = mongoose.model('users',user)
module.exports = users