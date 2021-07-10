import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
H1
} from './NavbarElements';
import logo from './R.ico'
const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
        <img src={logo}/>
        <H1>LAHI</H1>
		<NavBtn>
		<NavBtnLink to='/' onClick={()=>{localStorage.removeItem("teacher_id")}}><strong>LogOut</strong></NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
