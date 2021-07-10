const exp = require("express")
const {hash,compare} = require("bcrypt")
const userapi = exp.Router()

const teacher = require("../Models/teacher.model")

userapi.post("/register", async(req,res)=>{
    const {name,email,password} = 
})


module.exports = userapi