import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'; //Enables clicks on link to scroll to it's section on same page
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Home</Link>
            <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Work</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Skills</Link>
            <Link activeClass='active' to='resource' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Resources</Link>
            <Link activeClass='active' to='dev' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Developer Setup</Link>
        </div>
        <button onClick= {() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}className="desktopMenuBtn">
            <img src={contactImg} alt="contactImg" className='desktopMenuImg'/>Contact Me
        </button>
        <img src={menu} alt="menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none' }}>
            <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Work</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='resource' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Resources</Link>
            <Link activeClass='active' to='dev' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Developer Setup</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
