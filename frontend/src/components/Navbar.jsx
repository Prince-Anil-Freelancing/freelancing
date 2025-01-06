import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt=""/>
      </div>
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        {/* <Link to="/buy/projects"><li>Buy Projects</li></Link> */}
        <Link to="/contact"><li>Contact Us</li></Link>
    </ul>
    </nav>
  )
}

export default Navbar
