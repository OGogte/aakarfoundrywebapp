import React from "react";
import logo from "../../img/Logo.png";
import hexagons from "../../img/login_hexagons@2x.png";
import cloud from "../../img/login_cloud-storage.png"
import { Link } from "react-router-dom";
import "./register_style.css";

export const Register = () => {
  return (
    <div className="frame-register">
      <div className="div">
        <img className="image" alt="Logo" src={logo} />
        <div className="overlap">
          <img className="hexagons" alt="Hexagons" src={hexagons} />
          <img className="cloud-storage-image" alt="Cloud storage icon" src={cloud} />
          <div className="ellipse" />
        </div>
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <form>
          <div className="heading">Register</div>
          <div className="nameBox">
            <input type="text" id="text" placeholder="Enter Name" />
          </div>
          <div className="emailBox">
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="passwordBox">
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <div className="departmentBox">
            <input type="text" id="departmentBox" placeholder="Enter Department" />
          </div>
          <div className="confirm_password">
            <input type="password" id="confirm_password" placeholder="Confirm Password" />
          </div>

          <button className="loginBox" type="submit">Register</button>
        </form>
        <div className="registerLine">Already Registered? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
