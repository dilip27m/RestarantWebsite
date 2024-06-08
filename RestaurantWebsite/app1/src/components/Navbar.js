import React from 'react';
import './outer.css';

function Navbar() {
  return (
    <div id="header">
      <nav id="navbar">
        <a href="/"><h1>AMRITAM</h1></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#reservation">Reservation</a></li>
          <li><a href="#chef">Chefs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#social">Contact</a></li>
        </ul>
        <div id="phone">
          <a href="/adminlogin.html">Admin Login</a>
        </div>
      </nav>
      <div id="mobile_menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#reservation">Reservation</a></li>
          <li><a href="#chef">Chefs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#social">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
