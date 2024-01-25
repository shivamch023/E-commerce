import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navbar.jpg'
import navProfile from '../../assets/shivm .jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile}  className="nav-profile"alt="" />
    </div>
  )
}

export default Navbar;