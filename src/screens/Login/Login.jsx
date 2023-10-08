import React from "react";
import logo from "../../img/Logo.png";
import hexagons from "../../img/login_hexagons@2x.png";
import cloud from "../../img/login_cloud-storage.png"

import "./login_style.css";

export const Login = () => {
  return (
    <div className="frame-login">
      <div className="div">
        <img className="image" alt="Image" src={logo} />
        <div className="overlap">
          <img className="hexagons" alt="Hexagons" src={hexagons} />
          <img className="cloud-storage-image" alt="Cloud storage image" src={cloud} />
          <div className="ellipse" />
        </div>
        <div className="ellipse-2" />
        <div className="ellipse-3" />

        {/*form code*/}

      </div>
    </div>
  );
};
