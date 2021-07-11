const exp = require("express")
const studentApi = exp.Router()
const classroom = require("../Models/classroom.model")

studentApi.delete("/delete/:classid" , async(req,res)=>{

    const studentid = req.body.studentId
    const cls= await classroom.findById(req.params.classid)
    console.log(cls)
    if(cls){
        let studs = JSON.parse(JSON.stringify(cls.students))
        console.log(studs)
        studs = studs.filter((stud)=>{
            return stud._id !== studentid
        })
        await classroom.findByIdAndUpdate(req.params.classid,{
            $set:{students:studs}
        }, (err)=>{
            if(err){
                res.send({message:"error occured",success:false})
            }
            else{
                res.send({message:"deleted sucessfully" , success:true})
            }
        })
    }

})

studentApi.post("/add/:classid" , async(req,res)=>{
    let student = req.body
    let cls = await classroom.findById(req.params.classid)
    console.log(cls)
    if(cls){
        let studs = JSON.parse(JSON.stringify(cls.students))
        console.log(studs,student)
        studs.push(student)
        console.log(studs)
        console.log()
        await classroom.findByIdAndUpdate(req.params.classid,{
            $set:{students:studs}
        }, (err)=>{
            if(err){
                res.send({message:"error occured",success:false})
                console.log(err.message)
                console.log(err)
            }
            else{
                res.send({message:"deleted sucessfully" , success:true})
            }
        })
    }
    else{
        res.send({message:"error occured" , success:false})
    }
})



module.exports = studentApi