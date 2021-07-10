import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import './class.css'
const Createclass = () => {
    const [students, setStudents] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cname, setCname] = useState("")
    const addstudent=()=>{
        var temp=[]
        temp=students
        temp.push({name:name,email_id:email,mobile:phone})
            setStudents(temp)
            setEmail("")
            setPhone("")
            setName("")
            console.log(students)
    }
    let history = useHistory();
    const create=()=>{
        fetch("http://localhost:4000/classroom/addclassroom/"+localStorage.getItem("teacher_id"), {
      method: "POST",
      body: JSON.stringify({ classname: cname, students:students }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) 
        {
          alert(data.message);
          localStorage.setItem('id',data.classroom_id)
          history.push("/login/classes")
        }
        else{
            alert("Failed to create class");
        }
        window.location.reload();
      });
    }
    return (
        <div className="div1">
            <div className="div2">
            <input type="text" value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
            <input type="text" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type="text" value={phone} placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}}></input>
            <button onClick={addstudent}>Add New Student</button>
            </div>
            <div className="div3">
            <input type="text" value={cname} placeholder="Class Name" onChange={(e)=>{setCname(e.target.value)}}></input>
            <button onClick={create}>Create Class</button>
            </div>
        </div>
    )
}

export default Createclass
