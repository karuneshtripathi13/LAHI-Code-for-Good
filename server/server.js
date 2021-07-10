const express = require("express")
const app = express(); 

//we need databaseconnection
const getConnection = require("./database")
getConnection()

//import the routes we need
const taskapi = require("./apis/taskapi")
const userapi = require("./apis/userapi")
//This helps us parse the json data we receive
app.use(express.json())


// all routes with http:localhost:4000/users/* will be sent to the user api       
app.use("/users",userapi)

// all routes with http:localhost:4000/tasks/* will be sent to the task api
app.use("/tasks",taskapi)



//middleware to solve the invalid routes
app.use((req,res) => {
    res.send({message : `The path : ${req.url} doesnot exist`})
})

//making the server listen at the given port
app.listen(4000||process.env.PORT , ()=>
{
    console.log("Server up on port 4000");
})