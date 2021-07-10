import React,{useState} from 'react'
import "./Polling.css"
const Polling = () => {
    const [link, setLink] = useState("")
    const [live,setLive]=useState(false)
    return (
        <div>
            <input className="inp1" onChange={(e)=>{setLink(e.target.value)}} type="text" placeholder="Poll Link"></input>
            <button className="btn1" onClick={()=>{
                const requestOptions = {
                    method: 'POST',
                    body: JSON.stringify({ poll_link:link }),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                };
                var path='http://localhost:4000/poll/savelink/'+localStorage.getItem('id')
                fetch(path,requestOptions)
              .then((response) => response.json())
              .then((data) => {
                console.log(data.success);
                if (!data.success) 
                {
                  alert(data.success);
                }
                else{
                    alert("Successful")
                    setLive(true)
                }
              });
            }}>Submit</button>
            {(live?<div>
            <button className="btn2"onClick={()=>{
                var path='http://localhost:4000/poll/sendpoll/'+localStorage.getItem('id')
                fetch(path)
              .then((response) => response.json())
              .then((data) => {
                console.log(data.success);
                if (!data.success) 
                {
                  alert("Failed to make it live");
                }
                else{
                    alert(data.message)
                }
                window.location.reload();
              });
            }}>Make Poll live</button>
            </div>:<div></div>)}
        </div>
    )
}

export default Polling
