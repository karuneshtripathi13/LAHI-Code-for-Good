const exp = require("express")
const notifyapi = exp.Router()
const sendSms = require('../controller/smsController')

notifyapi.post("/sendSms" , async (req,res)=>{
    const {email,password} = req.body
    console.log(email,password)
    await sendSms([],'test')
})
module.exports = notifyapi