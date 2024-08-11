import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'; //Enables clicks on link to scroll to it's section on same page

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuItemList">Work</Link>
            <Link className="desktopMenuItemList">Skills</Link>
            <Link className="desktopMenuItemList">Resources</Link>
            <Link className="desktopMenuItemList">Developer Setup</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="contactImg" className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar
