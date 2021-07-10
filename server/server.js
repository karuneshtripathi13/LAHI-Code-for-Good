const express = require("express")
const app = express(); 
const cors=require('cors')
//we need databaseconnection
const getConnection = require("./database")
getConnection()

const classroom = require("./Models/classroom.model")

//import the routes we need
const userApi = require("./apis/users")
const classroomApi = require("./apis/classroom")
const studentApi = require("./apis/student")
const pollApi = require("./apis/poll")
//This helps us parse the json data we receive
app.use(express.json())
app.use(cors())
app.use("/student",studentApi)
app.use("/teacher",userApi)
app.use("/classroom",classroomApi)
app.use("/poll",pollApi)
app.get("/goToLink/:classroomId/:studentId",async(req,res)=>{
    let cls = await classroom.findById(req.params.classroomId)
    let studs = JSON.parse(JSON.stringify(cls.students))
    console.log(studs)
    studs.forEach((std) => {
        if(std._id === req.params.studentId){
            std.isPresent = true
        }
    })
    console.log(studs)
    await classroom.findByIdAndUpdate(req.params.classroomId, {
        $set:{students:studs}
    } , (err)=>{
        if(err){
            res.send({message:"some error occured",success:false})
        }
        else{
            res.writeHead(301,
                {Location: cls.meetLink}
              );
              res.end();
        }
    })
})

//middleware to solve the invalid routes
app.use((req,res) => {
    res.send({message : `The path : ${req.url} doesnot exist`})
})

//making the server listen at the given port
app.listen(4000||process.env.PORT , ()=>
{
    console.log("Server up on port 4000");
})