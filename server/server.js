const express = require("express")
const app = express(); 

//we need databaseconnection
const getConnection = require("./database")
getConnection()

//import the routes we need
const userApi = require("./apis/users")
const classroomApi = require("./apis/classroom")
//This helps us parse the json data we receive
app.use(express.json())


app.use("/teacher",userApi)
app.use("/classroom",classroomApi)
app.get("/goToLink/:classroomId/:studentId",async(req,res)=>{
    res.writeHead(301,
        {Location: 'https://google.com'}
      );
      res.end();
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