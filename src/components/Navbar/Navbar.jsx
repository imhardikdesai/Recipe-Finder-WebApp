import React, { useState } from "react";
import logo from "./../../Assets/main-logo.png";
import {AiOutlineHome} from 'react-icons/ai';
import "./Navbar.css";
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className={`align-items-center ${isMobileNavOpen ? "mobile-open" : ""}`}>
        <div className="nav-logo d-flex align-items-center">
          <img src={logo} alt="logo" />
        </div>
        <button className="hamburger" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMobileNavOpen ? "mobile-open" : ""}`}>
          <li>
            <AiOutlineHome />
            Home
          </li>
          <li>
            <RiCompassDiscoverLine />
            Discover
          </li>
          <li>
            <MdOutlineTipsAndUpdates />
            Tips
          </li>
        </ul>
        <div className="logo-buttons">
          <button className="nav-btn signup">Sign up</button>
          <button className="nav-btn login">Log in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
