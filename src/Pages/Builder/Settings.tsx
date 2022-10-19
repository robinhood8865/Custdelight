import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../App/hooks";
import Widget from "../../Components/Widget/Widget";
import { setSettingIndex } from "../../Slices/settingSlice";

const Modules = (props: any) => {
  const { name } = props;
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(setSettingIndex(0));
  }, [location.pathname]);
  return (
    <div className="flex">
      <Widget />
      <div className="ml-[20px]"></div>
    </div>
  );
};

export default Modules;
