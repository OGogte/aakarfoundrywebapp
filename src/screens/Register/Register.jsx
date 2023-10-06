import React from "react";
import { Flags } from "../../components/Flags";
import { Property1Hide } from "../../icons/Property1Hide";
import "./style.css";

export const Register = () => {
  return (
    <div className="frame-create">
      <div className="overlap">
        <div className="lines">
          <img className="line" alt="Line" src="https://c.animaapp.com/jwlVi52W/img/line-206-1.svg" />
          <img className="img" alt="Line" src="https://c.animaapp.com/jwlVi52W/img/line-206-1.svg" />
        </div>
        <div className="text-wrapper">Or</div>
      </div>
      <p className="already-a-member">
        <span className="span">Already a member? </span>
        <span className="text-wrapper-2">Login</span>
      </p>
      <div className="frame">
        <div className="div">Create</div>
      </div>
      <div className="group">
        <div className="frame-wrapper">
          <div className="union-wrapper">
            <img className="union" alt="Union" src="https://c.animaapp.com/jwlVi52W/img/union-1.svg" />
          </div>
        </div>
        <p className="i-agree-to-the-terms">
          <span className="span">I agree to the </span>
          <span className="text-wrapper-3">Terms</span>
          <span className="span"> of </span>
          <span className="text-wrapper-3">Service and Privacy Policy</span>
        </p>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-4">Confirm password *</div>
      </div>
      <div className="frame-2">
        <div className="text-wrapper-5">Password *</div>
        <Property1Hide className="password-hide-and" color="#1B2547" opacity="0.22" />
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <Flags
            className="flags-instance"
            property1="US"
            propertyUs="https://c.animaapp.com/jwlVi52W/img/flags-1@2x.png"
          />
          <div className="text-wrapper-6">Phone number *</div>
        </div>
      </div>
      <div className="frame-3">
        <div className="text-wrapper-7">Work email *</div>
      </div>
      <div className="frame-4">
        <div className="text-wrapper-8">Full name *</div>
      </div>
      <div className="overlap-2">
        <img className="hexagons" alt="Hexagons" src="https://c.animaapp.com/jwlVi52W/img/hexagons-1@2x.png" />
        <img className="cloud-storage-image" alt="Cloud storage image" src="https://c.animaapp.com/jwlVi52W/img/cloud-storage-image-1@2x.png"/>
        <div className="ellipse" />
      </div>
      <div className="ellipse-2" />
      <div className="ellipse-3" />
      <div className="text-wrapper-9">Create Account</div>
      <img className="image" alt="Image" src="https://c.animaapp.com/jwlVi52W/img/image001-1-1@2x.png" />
    </div>
  );
};
