import React, { useState } from "react";
import ModulesBtn from "../../Components/Builder/Components/ModulesBtn";
import CloseBtn from "../../Components/Builder/Components/CloseBtn";

const Modules = (props: any) => {
  const { name } = props;
  return (
    <div>
      This is Users
      {/* <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
        <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
          <div className="font-bold text-[16px] leading-[20px] ">{name}</div>
          <CloseBtn />
        </div>
        {name === "Modules" && <ModulesSidebar />}
        <div></div>
      </div> */}
    </div>
  );
};

export default Modules;
