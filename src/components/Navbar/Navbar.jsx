import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="NextGenOera" />
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#">Home</a>
          </li>

          <li
            className="dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <a href="#">What We Do ▾</a>

            <ul
              className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
            >
              <li>
                <a href="#">AI Solutions</a>
              </li>
              <li>
                <a href="#">Software</a>
              </li>
              <li>
                <a href="#">Automation</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Who We Are</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
