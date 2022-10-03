import React, { useState } from "react";
import ModulesBtn from "./ModulesBtn";
import CloseBtn from "./CloseBtn";
import { useLocation } from "react-router-dom";
import ModulesSidebar from "./ModulesSidebar";
import ThemeSidebar from "./ThemeSidebar";
import SettingsSidebar from "./SettingsSidebar";

const SubBar = () => {
  const location = useLocation();

  const getCurrentPage = (url: string): boolean => {
    return location.pathname.toLowerCase().startsWith("/builder/" + url);
  };

  return (
    <div>
      {!getCurrentPage("users") && (
        <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
          <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
            <div className="font-bold text-[16px] leading-[20px] ">
              {getCurrentPage("modules") && "Modules"}
              {getCurrentPage("theme") && "Theme"}
              {getCurrentPage("settings") && "Settings"}
            </div>
            <CloseBtn />
          </div>
          {/* <div className=" w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[34px] pt-[30px]">
        <div className="">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            Monetisation
          </div>
          <ModulesBtn name="Membership" visible={true} />
          <ModulesBtn name="Vouchers" visible={true} />
          <ModulesBtn name="Payment" visible={true} />
        </div>
        <div className="mt-[29px]">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            eCommerce (Coming soon)
          </div>
          <ModulesBtn name="Itme Sales" visible={false} />
          <ModulesBtn name="Donation" visible={false} />
          <ModulesBtn name="Crowdfunding" visible={false} />
        </div>
        <div className="mt-[29px]">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            Engagement (Coming soon)
          </div>
          <ModulesBtn name="Survey" visible={false} />
          <ModulesBtn name="Google Ratings" visible={false} />
          <ModulesBtn name="Invite Only Events" visible={false} />
        </div>
      </div> */}
          <div>
            {getCurrentPage("modules") && <ModulesSidebar />}
            {getCurrentPage("theme") && <ThemeSidebar />}
            {/* {getCurrentPage("users") && "Users"} */}
            {getCurrentPage("settings") && <SettingsSidebar />}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubBar;
