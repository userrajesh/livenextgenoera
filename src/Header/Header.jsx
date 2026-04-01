import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="main_container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop & Mobile Menu */}
        <div className={isMobile ? "middle_section active" : "middle_section"}>
          <ul className="nav_links">
            <li><Link to="#" onClick={() => setIsMobile(false)}>About</Link></li>
            <li><Link to="#" onClick={() => setIsMobile(false)}>Career</Link></li>
            <li className="dropdown">
              <Link to="#">Our Work</Link>
              <ul className="submenu">
                <li><Link to="#">Software Service</Link></li>
                <li><Link to="#">Hardware Service</Link></li>
                <li><Link to="#">Other Service</Link></li>
              </ul>
            </li>
            <li><Link to="#" onClick={() => setIsMobile(false)}>Resources</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="right_section">
          <button className="touch_btn">Get in Touch</button>
          
          {/* Mobile Toggle Button */}
          <button className="mobile_menu_icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;