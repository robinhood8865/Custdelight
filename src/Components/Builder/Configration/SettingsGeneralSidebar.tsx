// import React, { useState } from "react";
// import ModulesBtn from "./ModulesBtn";
// import EditInput from "./EditInput";
import CloseBtn from "../Components/CloseBtn";
import SettingsBtn from "../Components/SettingsBtn";

const SettingsGeneralSidebar = () => {
  return (
    <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
      <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
        <div className="flex items-center ml-[3px] mr-[48px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00957 12.8912C8.40046 13.2821 8.40046 13.9158 8.00957 14.3067C7.61868 14.6976 6.98493 14.6976 6.59405 14.3067L0.294318 8.00696C-0.0962057 7.61644 -0.0962057 6.98327 0.294318 6.59275L6.59405 0.293017C6.98493 -0.097868 7.61868 -0.097868 8.00957 0.293017C8.40046 0.683903 8.40046 1.31765 8.00957 1.70854L2.41826 7.29985L8.00957 12.8912Z"
              fill="#30313D"
            />
          </svg>
          <div className="font-bold text-[16px] leading-[20px] ">General</div>
        </div>
        <CloseBtn />
      </div>
      <div className="text-black bg-white w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[23px] pt-[30px]">
        <div className="">
          <SettingsBtn name="General" detail="change subdomain, fav icon" />
          <SettingsBtn name="Email Signature" detail="Update email signature" />
          <SettingsBtn
            name="Integration"
            detail="Connect your google analytics"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SettingsGeneralSidebar;
