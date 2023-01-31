import React from "react";
import logo from "./../../Assets/main-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="align-items-center">
        <div className="nav-logo d-flex align-items-center">
          <img src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>Tips</li>
          </ul>
        </div>
        <div className="logo-buttons">
          <button className="nav-btn signup">Sign up</button>
          <button className="nav-btn login">Log in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
