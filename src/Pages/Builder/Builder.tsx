import React from "react";
import { useState } from "react";
import ModulesSidebar from "../../Components/Builder/ModulesSidebar";

import Sidebar from "../../Components/Builder/Sidebar";
import NavBar from "../../Components/Nav/NavBar";
import Property from "../../Components/Builder/Property";
import ThemeSidebar from "../../Components/Builder/ThemeSidebar";
import Widget from "../../Assets/Images/widget.svg";

const Main = () => {
  const [index, setIndex] = useState(0);

  const handleClickButton = (index: any) => {
    setIndex(index);
  };

  console.log(index);
  return (
    <div className="w-full h-screen bg-white">
      <NavBar />
      <div className="flex justify-between">
        <div className="flex">
          <Sidebar index={index} setIndex={handleClickButton} />
          {index === 0 && <ModulesSidebar />}
          {index === 1 && <ThemeSidebar />}
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
