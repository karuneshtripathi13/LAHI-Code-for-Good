import React,{useEffect,useState} from 'react'
import './Attendence.css'
const Attendance = () => {
    const [count, setCount] = useState(0)
    const [studentnames, setStudentnames] = useState([])
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        };
        var path='http://localhost:4000/classroom/getAttendance/'+localStorage.getItem('id')
        fetch(path)
        .then(response => response.json())
        .then(data => {
            if(data.students.length===0)
            alert("Failed to get attendence")
            else
            {
            setCount(data.count)
            setStudentnames(data.students)
            }
        });
       
    }, [])
    return (
        <div>
            <h1>Present Students</h1>
            {studentnames.map((student)=>
            <div >
                <div className="studentnm">
                <h3>{student}</h3>
                </div>
            </div>
            )}
        </div>
    )
}
export default Attendance