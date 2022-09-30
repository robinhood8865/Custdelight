import React, { useState } from "react";
import SubBarBtn from "./SubBarBtn";
import EditInput from "./EditInput";
import CloseBtn from "./CloseBtn";

const ThemeSidebar = () => {
  return (
    <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
      <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
        <div className="font-bold text-[16px] leading-[20px] ">Theme</div>
        <CloseBtn />
      </div>
      <div className="text-black bg-white w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[23px] pt-[30px]">
        <div className="">
          <EditInput name="Header" />
          <EditInput name="Button" />
          <EditInput name="Widget" />
          <EditInput name="WidgetIcon" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ThemeSidebar;
