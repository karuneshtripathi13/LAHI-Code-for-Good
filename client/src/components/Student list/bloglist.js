import { useState , useEffect } from "react";
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
            }
        }
        console.log(students)
    }, [])
    return (
            <div className="blocklist">
            {students.map((student)=>
            <div className="blockspreview">
                <h1>{student.name}</h1>
                <p>{student.email_id}</p>
            </div>
            )}
            </div>
      );
}
 
export default Bloglist;