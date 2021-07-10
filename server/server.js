const express = require("express")
const app = express(); 
const cors=require('cors')
//we need databaseconnection
const getConnection = require("./database")
getConnection()

//import the routes we need
const userApi = require("./apis/users")
const classroomApi = require("./apis/classroom")
//This helps us parse the json data we receive
app.use(express.json())
app.use(cors())

app.use("/teacher",userApi)
app.use("/classroom",classroomApi)


//middleware to solve the invalid routes
app.use((req,res) => {
    res.send({message : `The path : ${req.url} doesnot exist`})
})

//making the server listen at the given port
app.listen(4000||process.env.PORT , ()=>
{
    console.log("Server up on port 4000");
})