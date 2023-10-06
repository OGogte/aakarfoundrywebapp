/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const UserFill = ({ className }) => {
  return (
    <svg
      className={`user-fill ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 28 30"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M26.4118 26.9689C27.0014 26.846 27.3523 26.2309 27.088 25.6897C26.1686 23.8068 24.5918 22.1517 22.5227 20.9168C20.0776 19.4576 17.0819 18.6667 14 18.6667C10.9181 18.6667 7.92236 19.4576 5.47734 20.9168C3.40821 22.1517 1.83136 23.8068 0.912001 25.6897C0.647749 26.2309 0.998568 26.846 1.58818 26.9689L5.83914 27.8548C11.2219 28.9766 16.7781 28.9766 22.1609 27.8548L26.4118 26.9689Z"
        fill="white"
      />
      <circle className="circle" cx="14" cy="7.77778" fill="white" r="7.77778" />
    </svg>
  );
};
