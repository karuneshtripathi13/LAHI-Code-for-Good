import React,{useState,useEffect} from 'react'
import './classes.css'
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
            .then(data => {setClasses(data.data); console.log(data.data)});
    }, [])
    const openClass=()=>{
      
    }
    return (
        <div>
        <ul id="data" >
      {classes.map((data) => (
        <ul>
        <button className='classbtn' onClick={openClass} >{data.classname}</button>
        </ul>
      ))}
      </ul>
        </div>
    )
}

export default Classes
