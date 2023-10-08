import React from "react";
import logo from "../../img/Logo.png";
import hexagons from "../../img/login_hexagons@2x.png";
import cloud from "../../img/login_cloud-storage.png"
import { Link } from "react-router-dom";
import "./login_style.css";

export const Login = () => {
  return (
    <div className="frame-login">
      <div className="div">
        <div className="overlap">
          <img className="hexagons" alt="Hexagons" src={hexagons} />
          <img className="cloud-storage-image" alt="Cloud storage icon" src={cloud} />
          <div className="ellipse" />
        </div>
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <form>
        <div className="heading">Login</div>
        <div className="emailBox">
          <input type="email" id="email" placeholder="Enter Email" />
        </div>
        <div className="passwordBox">
          <input type="password" id="password" placeholder="Enter Password" />
        </div>

        <button className="loginBox" type="submit">Login</button>
      </form>
      <div className="registerLine">New member? <Link to="/register">Create Account</Link>
      </div>
      </div>
    </div>
  );
};
