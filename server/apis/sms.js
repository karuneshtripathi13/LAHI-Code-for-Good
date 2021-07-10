const exp = require("express")
const taskapi = exp.Router()



//import the models we need
const users = require("../Models/teacher.model")
const tasks = require("../Models/classroom.model")




//http://localhost:4000/tasks/addtask

taskapi.post("/addtask" , verification , async (req,res)=>{
        const task = req.body
        const user = await users.findOne({_id:req.user.id})
        console.log(user)
        console.log(task)
        let newtask = new tasks({  
            email:user.email,
            task_name:task.name,
            task_description:task.description,
            date:task.date
        })
        console.log("newtask ", newtask)
        newtask.save((err) => {
            if(!err) console.log("Saved successfully")
        else console.log("error is here",err.message)
    })
        res.send({message:"successfully inserterd"})
    
})

//http://localhost:4000/tasks/gettasks

taskapi.get("/gettasks" , verification , async (req,res) => {

        const user = await users.findOne({_id:req.user.id})
        if(user){
            const data = await tasks.find({email:user.email})
            res.status(200).send({data})
        }
        else{
            res.send({message:"User doesnot exist"})
        }
})

//update the the task 
//http://localhost:4000/tasks/updatetask/:taskid
taskapi.put("/updatetask/:taskid" , verification , async (req,res) => {
    const taskid = req.params.taskid
    const user = await users.find({_id:req.user.id})
    const task = await tasks.findOne({_id:taskid})
    if(task.email === user.email){
        tasks.findByIdAndUpdate(taskid , {
            $set:req.body
        })
        console.log("updated successfully")
        res.send({message:"updated successfully"})
    }
    else{
        res.status(401).send({messasge:"You cannot update this task"})
    }

})

//delete the task
//http://localhost:4000/tasks/deletetask/:taskid

taskapi.delete("/deletetask/:taskid" , async (req,res) => {
    const taskid  = req.params.taskid
    const user = await users.find({_id:req.user.id})
    const task = await tasks.findOne({_id:taskid})
    if(task.email === user.email){
        tasks.findByIdAndRemove(taskid)
        res.status(200).send({message:"Deleted Successfully"})
        console.log("deleted successfully")
    }
    else{
        res.status(401).send({messasge:"You cannot delete this task"})
    }
})






module.exports = taskapi