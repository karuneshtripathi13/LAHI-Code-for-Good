import React,{useEffect,useState} from 'react'
import './Attendence.css'
const Attendance = () => {
    const [count, setCount] = useState(0)
    const [studentnames, setStudentnames] = useState([])
    var arr=[]
    useEffect(() => {
        var path='http://localhost:4000/classroom/getAttendance/'+localStorage.getItem('id')
        fetch(path)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.students.length===0)
            alert("No attendence is available")
            else
            {
            setCount(data.count)
            setStudentnames(data.students)
            console.log(studentnames)
            console.log(count)
            arr=data.students
            console.log(arr)
            console.log(data.students)
            }
        });
       
    }, [])
    return (
        <div className="attendancewrapper">
            <h1>Present Students</h1>
            {studentnames.map((student)=>
            <div >
                <div >
                <h3 className="attendencest">{student}</h3>
                </div>
            </div>
            )}
        </div>
    )
}
export default Attendance