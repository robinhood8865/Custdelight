import React from "react";
import Button from "./Button";
const Sidebar = () => {
  return (
    <div className="h-screen min-h-[1000px] w-[200px] border-user-border border-[1px]">
      <div className="mt-[82px] h-[full]"></div>
      <div className="flex justify-center mb-[14px]">
        <Button name="Modules" />
      </div>
      <div className="flex justify-center mb-[14px]">
        <Button name="Theme" />
      </div>
      <div className="flex justify-center mb-[14px]">
        <Button name="Users " />
      </div>
      <div className="flex justify-center mb-[14px]">
        <Button name="Settings" />
      </div>
    </div>
  );
};
export default Sidebar;
