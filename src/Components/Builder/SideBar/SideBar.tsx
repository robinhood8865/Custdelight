import React, { useEffect, useState } from "react";
import ItemButton from "../Components/ItemButton";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(-1);

  const handleClickItemButton = (index: any) => {
    setIndex(index);
  };
  const getCurrentPage = (url: string): boolean => {
    return location.pathname.toLowerCase().startsWith("/builder/" + url);
  };
  useEffect(() => {
    getCurrentPage("modules") && setIndex(0);
    getCurrentPage("theme") && setIndex(1);
    getCurrentPage("users") && setIndex(2);
    getCurrentPage("settings") && setIndex(3);
  });
  console.log("index", index);
  return (
    <div className="h-full w-[200px] border-user-border border-[1px] bg-[#FCFCFC]">
      <div className="mt-[82px] h-[full]"></div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            if (index !== 0) {
              handleClickItemButton(0);
              navigate("/builder/modules");
            }
          }}
          name="Modules"
          select={index === 0 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            if (index !== 1) {
              handleClickItemButton(1);
              navigate("/builder/theme");
            }
          }}
          name="Theme"
          select={index === 1 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            if (index !== 2) {
              handleClickItemButton(2);
              navigate("/builder/users");
            }
          }}
          name="Users "
          select={index === 2 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            if (index !== 3) {
              handleClickItemButton(3);
              navigate("/builder/settings");
            }
          }}
          name="Settings"
          select={index === 3 ? 1 : 0}
        />
      </div>
    </div>
  );
};
export default SideBar;
