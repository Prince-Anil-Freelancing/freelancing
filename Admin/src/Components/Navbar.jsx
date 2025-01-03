import React from 'react';
// import './Sidebar.css';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard,MdConnectWithoutContact } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="App-sidebar">
      <ul>
        <Link to="/"><li><MdSpaceDashboard /><span>DashBoard</span></li></Link>
        <li><AiFillProject /><span>Project</span></li>
        <li><FaPersonMilitaryToPerson /><span>Member</span></li>
        <Link to="/contact"><li><MdConnectWithoutContact /><span>Contact</span></li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
