import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = ({ title, mode, toggleMode }) => { 
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <h1 className="navbar-logo">{title}</h1>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li><a href="#home">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>

      {/* Switch Button for Mode */}
      <div className="form-check form-switch mx-12">
        <input
          className="form-check-input"
          onClick={toggleMode} // Use destructured toggleMode
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          className={`form-check-label ${mode === 'dark' ? 'text-white' : ''}`}
          htmlFor="flexSwitchCheckDefault"
        >
          Enable {mode === 'light' ? 'dark' : 'light'} mode
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
