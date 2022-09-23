import React from "react";
// import "font-awesome/css/font-awesome.min.css";
import circle_check_img from "../../../src/Assets/Images/circle-check.png";

const Feature = () => {
  return (
    <div className="flex ">
      <div className="w-[24px] h-[24px] mr-[16px] ">
        <img src={circle_check_img} alt="" />
      </div>
      <div className="text-[16px] leading-[20px] font-[400] text-[#A0A0A0]">
        Lorem Ipsum is simply dummy text.
      </div>
    </div>
  );
};

export default Feature;
