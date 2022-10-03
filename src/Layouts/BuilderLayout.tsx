import React from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import SideBar from "../Components/Builder/SideBar";
import SubBar from "../Components/Builder/SubBar";

import BuilderNavBar from "../Components/Nav/BuilderNavBar";

const BuilderLayout = () => {
  const location = useLocation();
  // const [index, setIndex] = useState(0);
  // const [settingType, setSettingType] = useState(0);

  // const handleClickButton = (index: any) => {
  //   setIndex(index);
  // };

  // console.log("index", index);
  // console.log("setting", settingType);
  return (
    <div className="w-full h-screen bg-white">
      <BuilderNavBar />
      <div className="flex justify-between">
        <div className="flex">
          <SideBar />
          <SubBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuilderLayout;
