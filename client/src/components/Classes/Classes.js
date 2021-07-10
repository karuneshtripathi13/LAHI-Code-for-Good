import React,{useState,useEffect} from 'react'
import './classes.css'
import {Link} from 'react-router-dom'
const Classes = () => {
    const [classes, setClasses] = useState([])
    const [classname, setClassname] = useState([])
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        var path='http://localhost:4000/classroom/getclassrooms/'+localStorage.getItem("teacher_id")
        fetch(path, requestOptions)
            .then(response => response.json())
            .then(data => {setClasses(data.data); console.log(data.data);localStorage.setItem('ClassData',
            JSON.stringify(data.data)
          )});
            
    }, [])
    const openClass=()=>{
      var path=''
    }
    return (
        <div className="classwrapper">
        <ul id="data" className="list1" >
        <div className="sub">
      {classes.map((data) => (
        <ul>
        <div className='classbtn'><Link to='/login/student/' onClick={()=>localStorage.setItem('ClassName',data.classname)} style={{textDecoration:"none",color:"white"}} >{data.classname}</Link></div>
        </ul>
      ))}</div>
      <ul>  <div className="classbtn1"><Link to='/login/createclass' style={{textDecoration:"none",color:"white"}}>Add Class</Link></div></ul>
      </ul>
        </div>
    )
}

export default Classes
