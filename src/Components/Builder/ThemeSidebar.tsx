// import React, { useState } from "react";
// import ModulesBtn from "./ModulesBtn";
import EditInput from "./EditInput";
import CloseBtn from "./CloseBtn";

const ThemeSidebar = () => {
  return (
    <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
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
