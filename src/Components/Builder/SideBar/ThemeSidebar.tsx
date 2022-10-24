// import React, { useState } from "react";
// import ModulesBtn from "./ModulesBtn";
import ColorInput from "../Components/ColorInput";
import CloseBtn from "../Components/CloseBtn";
import IconInput from "../Components/IconInput";

const ThemeSidebar = () => {
  return (
    <div className="h-full w-[340px] bg-white text-black border-[1px] border-l-0 border-b-0 ">
      <div className="text-black bg-white w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[23px] pt-[30px]">
        <div className="">
          <ColorInput name="Header" />
          <ColorInput name="Button" />
          <ColorInput name="Widget" />
          <IconInput name="WidgetIcon" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ThemeSidebar;
