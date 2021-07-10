import React from 'react'

const Portal = () => {
    const createclass=()=>{
            
    }
    return (
        <div>
            <form onSubmit={createclass}>
            <button className="createclassroom">Create Class Room</button>
            <input type="text" placeholder="ClassName"></input>
            <button type="submit">Create</button>
            </form>
            <form action="">
            <button className="addstudent">Add student</button>
            <input type="text" placeholder="Student name"></input>
            <input type="text" placeholder="Mobile Number"></input>
            <input type="text" placeholder="Email ID"></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Portal
