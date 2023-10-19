import React from 'react';
import { me } from "../../assets/index";
import './about.css';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="i-img"
        src={me}
        alt="Juan Cruz Garcia"
        style={{ width: "80%", height: "80%", borderRadius: "50%" }}
      />
    </div>
  );
};

export default RightBanner;
