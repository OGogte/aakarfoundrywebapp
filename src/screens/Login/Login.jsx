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
          <span className="text-wrapper-2">Create Account and more</span>
        </p>
        <div className="frame">
          <div className="text-wrapper-3">Login</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-4">Confirm password *</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-5">Password *</div>
          <Property1Hide className="password-hide-and" color="#1B2547" opacity="0.22" />
        </div>
        <div className="frame-3">
          <div className="text-wrapper-6">Work email *</div>
        </div>
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
