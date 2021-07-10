import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const logout=()=>{
        localStorage.removeItem('teacher_id')
    }
    return (
        <div className="Logout">
            <h1 className="NGOheading">LAHI</h1>
            <Link to='/' className="logoutbtn" onClick={logout}>Logout &nbsp;<i className="fa fa-sign-out"></i></Link>
        </div>
    )
}

export default Navbar
