import { useState , useEffect } from "react";
import React, { Component }  from 'react';
import {Link} from 'react-router-dom'
import './bloglist.css'
const Bloglist = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        const data=JSON.parse(localStorage.getItem('ClassData'))
        const classn=localStorage.getItem('ClassName')
        var i=0
        console.log(data[0].students)
        for(i=0;i<data.length;i++)
        {
            if(classn.localeCompare(data[i].classname)===0)
            {
                setStudents(data[i].students)
                console.log('st=',data[i].students)
                localStorage.setItem("id",data[i]._id)
            }
        }
        console.log(students)
    }, [])
    return (
        <div className="main1">
            
            

            <div className="blocklist">
            {students.map((student)=>
            <div className="blockspreview">
                <div>
                <h1>{student.name} <button onClick={()=>{
                    var path='http://localhost:4000/student/delete/'+localStorage.getItem('id')
                    console.log(path)
                     fetch(path, { method: 'DELETE',body: JSON.stringify({studentId:student._id}) })
                     .then((response) => response.json())
                     .then((data) =>{
                         if(data.success)
                         {
                             console.log(data)
                            alert(data.message)
                            window.location.reload()
                         }
                         else{
                             alert(data.message)
                             window.location.reload()
                         }
                     } );
                }} style={{fontSize:"0.7vw",marginLeft:"10vw"}}>Remove</button></h1>
                <p>{student.email_id}</p>
                </div>
            </div>
            )}
            </div>
            <div className="comp1">
            <div className="meetingbtn"><Link to="/login/startmeet" style={{textDecoration:"none"}}>Send Meeting Invites</Link></div>
            <div className="meetingbtn"><Link to="/login/attendence" style={{textDecoration:"none"}}>View Attendence</Link></div>
            <div className="meetingbtn"><Link to="/login/polling" style={{textDecoration:"none"}}>Start a Poll</Link></div>
            <div className="meetingbtn"><Link to='/login/classes' style={{textDecoration:"none"}}>Back</Link></div>
            </div>
            
            </div>
      );
}
 
export default Bloglist;