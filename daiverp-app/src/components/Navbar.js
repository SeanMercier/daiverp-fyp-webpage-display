import React from "react";
import "./Navbar.css"; // Create this for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#model">Model</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
