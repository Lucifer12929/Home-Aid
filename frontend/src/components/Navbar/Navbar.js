import React from "react";
import { Link } from "react-router-dom";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./stlye.css";
import logo from './logo.png'

export default function Navbar() {

    const navRef = useRef();

const showNavbar = () => {
  navRef.current.classList.toggle("responsive_nav");
};

return (
  <>
  <div class="nav-wrapper">
 
  <nav class="navbar">
    <a href="/"><img src={logo} alt="Company Logo"/></a>
    <div class="menu-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    {/* <ul class="nav no-search"> */}
      {/* <li class="nav-item"><a href="/">Home</a></li> */}
      <div class="snow">
 
</div>
    {/* </ul> */}
  </nav>
  <div class="grad-bar"></div>
  </div>
  </>
  );
}
