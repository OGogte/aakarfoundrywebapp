/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Checked = ({ className }) => {
  return (
    <svg
      className={`checked ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M21.5815 35.0084C20.911 35.6683 20.0387 36 19.163 36C18.2872 36 17.4115 35.6683 16.7445 35.0084L9.00315 27.3493C7.66562 26.0294 7.66562 23.887 9.00315 22.5637C10.3407 21.2404 12.5026 21.2404 13.8402 22.5637L19.163 27.8299L34.1598 12.9925C35.4974 11.6692 37.6593 11.6692 38.9968 12.9925C40.3344 14.3158 40.3344 16.4548 38.9968 17.7781L21.5815 35.0084Z"
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
};
