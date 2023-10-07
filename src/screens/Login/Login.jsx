import React from "react";
import { Property1Hide } from "../../icons/Property1Hide";
import "./style.css";

export const Login = () => {
  return (
    <div className="frame-login">
      <div className="div">
        <div className="overlap-group">
          <div className="lines">
            <img className="line" alt="Line" src="https://c.animaapp.com/nU8qvlv2/img/line-205.svg" />
            <img className="img" alt="Line" src="https://c.animaapp.com/nU8qvlv2/img/line-205.svg" />
          </div>
          <div className="text-wrapper">Or</div>
        </div>
        <p className="new-member-create">
          <span className="span">New member? </span>
          <span className="text-wrapper-2">Create Account</span>
        </p>
        <div className="frame">
        <div className="text-wrappers-3">
        <button type="submit">Login</button>
      </div>
      
        </div>
        <div className="frame-3">
        <input type="text" placeholder="Work email *" className="text-wrapper-6" />
      </div>
      
      <div className="frame-2">
        <input type="password" placeholder="Password *" className="text-wrapper-5" />
        <Property1Hide className="password-hide-and" color="#1B2547" opacity="0.22" />
      </div>
      
      <div className="div-wrapper">
        <input type="password" placeholder="Confirm password *" className="text-wrapper-4" />
      </div>
z      
        <div className="overlap">
          <img className="hexagons" alt="Hexagons" src="https://c.animaapp.com/nU8qvlv2/img/hexagons@2x.png" />
          <img className="cloud-storage-image" alt="Cloud storage image" src="https://c.animaapp.com/nU8qvlv2/img/cloud-storage-image@2x.png"/>
          <div className="ellipse" />
        </div>
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="text-wrapper-7">Login</div>
        <img className="image" alt="Image" src="https://c.animaapp.com/nU8qvlv2/img/image001-1@2x.png" />
      </div>
    </div>
  );
};
