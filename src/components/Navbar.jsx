import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Francia</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">My skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contacts</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
