import React, { useState, useEffect } from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  const [menuActive, setMenuActive] = useState(false);
  
  // Toggle the menu state
  const toggleNav = () => {
    setMenuActive((prevState) => !prevState);
  };

  // Manage animations based on menu state
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    const overlay = document.querySelector("#overlay");
  
    if (menuActive) {
      overlay.style.display = "block"; // Ensure overlay is visible
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  
      // Animate nav items sequentially
      navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-out-${i + 1}`, `slide-in-${i + 1}`);
      });
    } else {
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  
      // Animate nav items sequentially
      navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-in-${i + 1}`, `slide-out-${i + 1}`);
      });
      // Hide the overlay after animation
      setTimeout(() => {
        overlay.style.display = "none"; // Match animation duration
      }, 400);
    }
  }, [menuActive]);

  return (
    <div>
      {/* Menu Overlay */}
      <div id="overlay" className={`overlay ${menuActive ? "overlay-active" : ""}`}>
        <nav>
          <ul>
            <li id="nav-1" className="nav-item slide-out-1 center">
              <a href="home" onClick={toggleNav}>
                Home
              </a>
            </li>
            <li id="nav-2" className="nav-item slide-out-2 center">
              <a href="about" onClick={toggleNav}>
                About
              </a>
            </li>
            <li id="nav-3" className="nav-item slide-out-3 center">
              <a href="services" onClick={toggleNav}>
                Services
              </a>
            </li>
            <li id="nav-4" className="nav-item slide-out-4 center">
              <a href="projects" onClick={toggleNav}>
                Projects
              </a>
            </li>
            <li id="nav-5" className="nav-item slide-out-5 center">
              <a href="contact" onClick={toggleNav}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Menu */}
      <div 
        id="hamburger-menu" 
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={toggleNav}
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '12px',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
      >
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>

      {/* Sections */}
      
    </div>
  );
};

export default Navbar2;