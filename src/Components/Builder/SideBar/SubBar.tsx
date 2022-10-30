import React, { useEffect, useState } from "react";

import CloseBtn from "../Components/CloseBtn";
import { useLocation } from "react-router-dom";
import ModulesSidebar from "./ModulesSidebar";
import ThemeSidebar from "./ThemeSidebar";
import SettingsSidebar from "./SettingsSidebar";
import GeneralSidebar from "./GeneralSidebar";
import IntegrationSidebar from "./IntegrationSidebar";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { setSettingIndex } from "../../../Slices/settingSlice";
import EmailSignatureSidebar from "./EmailSignatureSidebar";
import { setStyleIndex } from "../../../Slices/themeSlice";

const SubBar = () => {
  const dispatch = useAppDispatch();
  const { settingIndex } = useAppSelector((state) => state.setting);
  const location = useLocation();

  const getCurrentPage = (url: string): boolean => {
    return location.pathname.toLowerCase().startsWith("/builder/" + url);
  };

  useEffect(() => {
    setShowSubbar(true);
    // setStyleIndex(0);
  }, [location.pathname]);

  console.log("subbar");
  const [showSubbar, setShowSubbar] = useState(true);

  return (
    <div className="relative h-full overflow-auto overflow-x-hidden ">
      {!getCurrentPage("users") && showSubbar && (
        <div className="h-full  w-[340px] bg-[#FCFCFC] text-black border-[1px] border-l-0 border-b-0 border-user-border">
          <div className="absolute w-full">
            <div className=" w-full h-[67px] pl-[28px] pr-[16px] flex justify-between items-center bg-[#FCFCFC] border-r-[1px]">
              <div className="flex items-center">
                {getCurrentPage("settings") && settingIndex !== 0 && (
                  <div
                    onClick={() => {
                      dispatch(setSettingIndex(0));
                    }}
                    className="mr-[48px] cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00957 12.8912C8.40046 13.2821 8.40046 13.9158 8.00957 14.3067C7.61868 14.6976 6.98493 14.6976 6.59405 14.3067L0.294318 8.00696C-0.0962057 7.61644 -0.0962057 6.98327 0.294318 6.59275L6.59405 0.293017C6.98493 -0.097868 7.61868 -0.097868 8.00957 0.293017C8.40046 0.683903 8.40046 1.31765 8.00957 1.70854L2.41826 7.29985L8.00957 12.8912Z"
                        fill="#30313D"
                      />
                    </svg>
                  </div>
                )}
                <div className="font-bold text-[16px] leading-[20px] ">
                  {getCurrentPage("modules") && "Modules"}
                  {getCurrentPage("theme") && "Theme"}
                  {getCurrentPage("settings") &&
                    settingIndex === 0 &&
                    "Settings"}
                  {getCurrentPage("settings") &&
                    settingIndex === 1 &&
                    "General"}
                  {getCurrentPage("settings") &&
                    settingIndex === 2 &&
                    "Email Signature"}
                  {getCurrentPage("settings") &&
                    settingIndex === 3 &&
                    "Integration"}
                </div>
              </div>
              <CloseBtn setShowSubbar={setShowSubbar} />
            </div>
          </div>

          <div className="mt-[67px] bg-[#FCFCFC">
            {getCurrentPage("modules") && <ModulesSidebar />}
            {getCurrentPage("theme") && <ThemeSidebar />}
            {/* {getCurrentPage("users") && "Users"} */}

            {getCurrentPage("settings") && settingIndex === 0 && (
              <SettingsSidebar />
            )}
            {getCurrentPage("settings") && settingIndex === 1 && (
              <GeneralSidebar />
            )}
            {getCurrentPage("settings") && settingIndex === 2 && (
              <EmailSignatureSidebar />
            )}
            {getCurrentPage("settings") && settingIndex === 3 && (
              <IntegrationSidebar />
            )}
          </div>
        </div>
      )}
      {!showSubbar && (
        <div className="h-full flex items-center">
          <div
            className="cursor-pointer ml-[10px]"
            onClick={() => {
              setShowSubbar(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5297 3.1599C12.8234 2.43703 12.8234 1.26502 13.5297 0.542153C14.236 -0.180718 15.3812 -0.180718 16.0875 0.542153L27.4708 12.1923C28.1764 12.9145 28.1764 14.0855 27.4708 14.8077L16.0875 26.4578C15.3812 27.1807 14.236 27.1807 13.5297 26.4578C12.8234 25.735 12.8234 24.563 13.5297 23.8401L23.6329 13.5L13.5297 3.1599Z"
                fill="#30313D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.529732 3.27693C-0.176577 2.52729 -0.176577 1.31188 0.529732 0.562233C1.23604 -0.187411 2.38119 -0.187411 3.0875 0.562233L14.4708 12.6439C15.1764 13.3929 15.1764 14.6071 14.4708 15.3561L3.0875 27.4378C2.3812 28.1874 1.23604 28.1874 0.529734 27.4378C-0.176575 26.6881 -0.176575 25.4727 0.529734 24.7231L10.6329 14L0.529732 3.27693Z"
                fill="#30313D"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubBar;
