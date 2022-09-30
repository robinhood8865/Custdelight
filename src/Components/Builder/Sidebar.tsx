import React from "react";
import ItemButton from "./ItemButton";
const Sidebar = (props: any) => {
  const handleClickItemButton = (index: any) => {
    props.setIndex(index);
  };

  return (
    <div className="h-full w-[200px] border-user-border border-[1px] bg-white">
      <div className="mt-[82px] h-[full]"></div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(0);
          }}
          name="Modules"
          select={props.index === 0 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(1);
          }}
          name="Theme"
          select={props.index === 1 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(2);
          }}
          name="Users "
          select={props.index === 2 ? 1 : 0}
        />
      </div>
      <div className="flex justify-center mb-[14px]">
        <ItemButton
          onCustomClick={() => {
            handleClickItemButton(3);
          }}
          name="Settings"
          select={props.index === 3 ? 1 : 0}
        />
      </div>
    </div>
  );
};
export default Sidebar;
