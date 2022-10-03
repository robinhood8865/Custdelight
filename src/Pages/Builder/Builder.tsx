import React from "react";
import { useState } from "react";
import ModulesSidebar from "../../Components/Builder/ModulesSidebar";

import SideBar from "../../Components/Builder/SideBar";
import NavBar from "../../Components/Nav/NavBar";
import Property from "../../Components/Builder/Property";
import ThemeSidebar from "../../Components/Builder/ThemeSidebar";
import SettingsSidebar from "../../Components/Builder/SettingsSidebar";
import Widget from "../../Assets/Images/widget.svg";
import SettingsGeneralSidebar from "../../Components/Builder/SettingsGeneralSidebar";

const Main = () => {
  const [index, setIndex] = useState(0);
  const [settingType, setSettingType] = useState(0);

  const handleClickButton = (index: any) => {
    setIndex(index);
  };

  console.log("index", index);
  console.log("setting", settingType);
  return (
    <div className="w-full h-screen bg-white">
      <NavBar />
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
        <Property />
      </div>
    </div>
  );
};

export default Main;
