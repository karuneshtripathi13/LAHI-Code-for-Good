import React,{useState,useEffect} from 'react'
import './Meeting.css'
const Meeting = () => {
    const [link, setLink] = useState("")
    const [date, setDate] = useState("")
    const startmessaging=()=>{
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ meet_link: link,data_time:date,classroomId:localStorage.getItem("id")}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        };
        var path='http://localhost:4000/classroom/sendLink'
        fetch(path,requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.success);
        if (!data.success) 
        {
          alert(data);
        }
        else{
            alert("Successful")
        }
        window.location.reload();
      });
    }
    return (
        <div>
            <div className="fld1"><input type="text" onChange={(e) => setLink(e.target.value)} placeholder="Meeting Link"></input></div>
            
            <div className="fld2"><label for="datetime"></label><input name="datetime" type="datetime-local" onChange={(e)=>setDate(e.target.value)}></input></div>
            <button className="fld3" onClick={startmessaging}>Send</button>
        </div>
    )
}

export default Meeting
