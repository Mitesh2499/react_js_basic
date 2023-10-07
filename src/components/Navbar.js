import React from "react";
import logo from "../images/logo.svg";
function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-light">
        <div className="container">
          <img src={logo} alt="" className="navbar-logo" />
          <button className="navbar-btn btn btn-outline-secondary">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
