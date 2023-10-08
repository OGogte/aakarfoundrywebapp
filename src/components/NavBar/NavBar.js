import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../img/Logo.png";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        <img className="logo-image" alt="Logo" src={logo} />        
        <i className="fas fa-code"></i>
      </NavLink>
      
          <div className="nav-menu">
            <div className="nav-item">
              <NavLink to="/profile" className="nav-links">
                <AccountCircleIcon /> 
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/exit" className="nav-links">
                <ExitToAppIcon /> 
              </NavLink>
            </div>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
