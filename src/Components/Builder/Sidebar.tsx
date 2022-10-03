import React, { useState } from "react";
import ItemButton from "./ItemButton";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const handleClickItemButton = (index: any) => {
    setIndex(index);
  };

  return (
    <div className="h-full w-[200px] border-user-border border-[1px] bg-white">
      <div className="mt-[82px] h-[full]"></div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(0);
            navigate("/builder/modules");
          }}
          name="Modules"
          select={index === 0 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(1);
            navigate("/builder/theme");
          }}
          name="Theme"
          select={index === 1 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(2);
            navigate("/builder/users");
          }}
          name="Users "
          select={index === 2 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(3);
            navigate("/builder/settings");
          }}
          name="Settings"
          select={index === 3 ? 1 : 0}
        />
      </div>
    </div>
  );
};
export default SideBar;
