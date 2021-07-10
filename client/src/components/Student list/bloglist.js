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
        <div>
            <div className="meetingbtn"><Link to="/login/startmeet">Send Meeting Invites</Link></div>
            <div className="meetingbtn"><Link to="/login/attendence">View Attendence</Link></div>
            <div className="meetingbtn"><Link to="/login/polling">Start a Poll</Link></div>

            <div className="blocklist">
            {students.map((student)=>
            <div className="blockspreview">
                <div>
                <h1>{student.name}</h1>
                <p>{student.email_id}</p>
                </div>
            </div>
            )}
            </div>
            <Link to='/login/classes'>Back</Link>
            </div>
      );
}
 
export default Bloglist;