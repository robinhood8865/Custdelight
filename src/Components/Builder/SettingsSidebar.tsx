// import React, { useState } from "react";
// import ModulesBtn from "./ModulesBtn";
// import EditInput from "./EditInput";
import CloseBtn from "./CloseBtn";
import SettingsBtn from "./SettingsBtn";

const SettingsSidebar = (props: any) => {
  const handleClickItemButton = (index: any) => {
    props.setSettingType(index);
  };
  return (
    <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
      <div>
        <div className="text-black bg-white w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[23px] pt-[30px]">
          <div className="">
            <SettingsBtn
              onCustomClick={() => {
                handleClickItemButton(1);
              }}
              name="General"
              detail="change subdomain, fav icon"
            />
            <SettingsBtn
              onCustomClick={() => {
                handleClickItemButton(2);
              }}
              name="Email Signature"
              detail="Update email signature"
            />
            <SettingsBtn
              onCustomClick={() => {
                handleClickItemButton(3);
              }}
              name="Integration"
              detail="Connect your google analytics"
            />
          </div>
        </div>
        <div></div>
      </div>

      {/* {props.settingType === 1 && (
        <div>
          <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
            <div className="font-bold text-[16px] leading-[20px] ">
              Settings
            </div>
            <CloseBtn />
          </div>
          <div className="text-black bg-white w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[23px] pt-[30px]">
            <div className="">
              <SettingsBtn
                onCustomClick={() => {
                  handleClickItemButton(1);
                }}
                name="General"
                detail="change subdomain, fav icon"
              />
              <SettingsBtn
                onCustomClick={() => {
                  handleClickItemButton(2);
                }}
                name="Email Signature"
                detail="Update email signature"
              />
              <SettingsBtn
                onCustomClick={() => {
                  handleClickItemButton(3);
                }}
                name="Integration"
                detail="Connect your google analytics"
              />
            </div>
          </div>
          <div></div>
        </div>
      )} */}
    </div>
  );
};

export default SettingsSidebar;
