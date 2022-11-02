import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../App/hooks";
import Configuration from "../Components/Builder/Configuration/Configuration";
import SideBar from "../Components/Builder/SideBar/SideBar";
import SubBar from "../Components/Builder/SideBar/SubBar";
import BuilderNavBar from "../Components/Nav/BuilderNavBar";
import ApiService from "../Services/ApiService";
import { setMemebershipconfiguration } from "../Slices/membershipSlice";
import { setModuleconfiguration } from "../Slices/moduleSlice";
import { setSettingconfiguration } from "../Slices/settingSlice";
import { setThemeconfiguration } from "../Slices/themeSlice";
import { setVoucherconfiguration } from "../Slices/voucherSlice";

const BuilderLayout = () => {
  const location = useLocation();
  const widget = JSON.parse(localStorage.getItem("widget") as string);
  const { module, setting, theme } = widget;
  const { membership, voucher, ...temp } = module;

  const dispatch = useAppDispatch();
  dispatch(setMemebershipconfiguration(membership));
  dispatch(setVoucherconfiguration(voucher));
  dispatch(setModuleconfiguration(temp));
  dispatch(setThemeconfiguration(theme));
  dispatch(setSettingconfiguration(setting));

  // get data from database
  // useEffect(() => {
  //   const readWidget = async () => {
  //     const data = localStorage.getItem("user") as string;
  //     const widgetId = JSON.parse(data).widgetId1;
  //     console.log(
  //       "🚀 ~ file: BuilderLayout.tsx ~ line 17 ~ readWidget ~ widgetId",
  //       widgetId
  //     );
  //     const widget = await ApiService.readWidget(widgetId);
  //     console.log(
  //       "🚀 ~ file: BuilderLayout.tsx ~ line 28 ~ readWidget ~ widget",
  //       widget
  //     );
  //   };

  //   readWidget();
  // }, []);

  return (
    <div className="w-full h-screen min-h-[900px] bg-white">
      <BuilderNavBar />
      <div className="w-full h-full pt-[54px]">
        <div className="flex justify-between h-full">
          <div className="flex">
            <SideBar />
            <SubBar />
          </div>
          <div>
            <Outlet />
          </div>

          <Configuration />
        </div>
      </div>
    </div>
  );
};

export default BuilderLayout;
