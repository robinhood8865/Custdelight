import React from "react";
import { useState } from "react";

import SideBar from "../../Components/Builder/SideBar/SideBar";
import NavBar from "../../Components/Nav/NavBar";

import Configration from "../../Components/Builder/Configration/Configration";
import ThemeSidebar from "../../Components/Builder/SideBar/ThemeSidebar";
import SettingsSidebar from "../../Components/Builder/SideBar/SettingsSidebar";
import Widget from "../../Assets/Images/widget.svg";
import SettingsGeneralSidebar from "../../Components/Builder/SideBar/SettingsGeneralSidebar";
import BuilderNavBar from "../../Components/Nav/BuilderNavBar";
import ModulesSidebar from "../../Components/Builder/SideBar/ModulesSidebar";

const Builder = () => {
  const [index, setIndex] = useState(0);
  const [settingType, setSettingType] = useState(0);

  const handleClickButton = (index: any) => {
    setIndex(index);
  };

  console.log("index", index);
  console.log("setting", settingType);
  return (
    <div className="w-full h-screen bg-white">
      <BuilderNavBar />
      <div className="flex justify-between">
        <div className="flex">
          <SideBar />
          {index === 0 && <ModulesSidebar />}
          {index === 1 && <ThemeSidebar />}
          {index === 3 && settingType === 0 && (
            <SettingsSidebar
              settingType={settingType}
              setSettingType={setSettingType}
            />
          )}
          {index === 3 && settingType === 1 && <SettingsGeneralSidebar />}
          {index === 3 && settingType === 2 && <SettingsSidebar />}
          {index === 3 && settingType === 3 && <SettingsSidebar />}
          <div className="body h-full"></div>
        </div>
        {(index === 0 || index === 1) && (
          <div className="flex h-screen items-center">
            <img src={Widget} alt="" />
          </div>
        )}
        <Configration />
      </div>
    </div>
  );
};

export default Builder;
