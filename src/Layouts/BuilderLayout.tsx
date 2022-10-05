import React from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Configration from "../Components/Builder/Configration/Configration";
import SideBar from "../Components/Builder/SideBar/SideBar";
import SubBar from "../Components/Builder/SideBar/SubBar";
import BuilderNavBar from "../Components/Nav/BuilderNavBar";

const BuilderLayout = () => {
  const location = useLocation();
  const [moduleIndex, setModuleIndex] = useState(1);
  // const [settingType, setSettingType] = useState(0);

  // const handleClickButton = (index: any) => {
  //   setIndex(index);
  // };

  // console.log("index", index);
  // console.log("setting", settingType);
  return (
    <div className="w-full h-screen min-h-[900px] bg-white">
      <BuilderNavBar />
      <div className="w-full h-full pt-[54px]">
        <div className="flex justify-between h-full">
          <div className="flex">
            <SideBar />
            <SubBar setModuleIndex={setModuleIndex} />
          </div>
          <div>
            <Outlet />
          </div>

          <Configration />
        </div>
      </div>
    </div>
  );
};

export default BuilderLayout;
