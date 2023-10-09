import React from "react";
import logo from "../../img/Logo.png";
import hexagons from "../../img/login_hexagons@2x.png";
import cloud from "../../img/login_cloud-storage.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {isfirstName,isPassword,isRePassword,departmentBox,isMail} from "./ValidationFunction";
import "./register_style.css";

export const Register = () => {

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };


  const [formData, setForm] = useState({});

  function onFormSubmit(e) {
    e.preventDefault();
    
    var name = isfirstName(formData.name);
    var email = isMail(formData.email);
    var password = isPassword(formData.password);
    var confirm_password = isRePassword(formData.password, formData.confirm_password);
    //var departmentBox = departmentBox(formData.departmentBox);
    if (name && email && password) {
      console.log(formData);
      alert("Register Successful");
    } else {
      alert("Register Unsuccessful");
    }
  }

  useEffect(() => {
    setForm({
      name:"",
      email:"",
      password:"",
      confirm_password:"",
      //departmentBox:"",
    });
  });

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
            <input type="text" name="name" id="name" placeholder="Enter Name"  onChange={handleEvent} />
          </div>

          <div className="emailBox">
            <input type="email" name="email" id="email" placeholder="Enter Email"  onChange={handleEvent} />
          </div>

          <div className="departmentBox">
            <input type="text" name = "departmentBox" id="departmentBox" placeholder="Enter Department"  onChange={handleEvent}/>
          </div>

          <div className="passwordBox">
            <input type="password" name = "password" id="password" placeholder="Enter Password"  onChange={handleEvent} />
          </div>
          
          <div className="confirm_password">
            <input type="password" name = "confirm_password" id="confirm_password" placeholder="Confirm Password"  onChange={handleEvent} />
          </div>

          <button className="loginBox" type="submit"  onClick={onFormSubmit}>Register</button>
        </form>
        <div className="registerLine">Already Registered? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};
