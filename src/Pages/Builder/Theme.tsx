import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import ButtonColorPalete from "../../Components/Builder/Components/ButtonColorPalete";
import HeaderColorPalete from "../../Components/Builder/Components/HeaderColorPalete";
import WidgetColorPalete from "../../Components/Builder/Components/WidgetColorPalete";

import Widget from "../../Components/Widget/Widget";
import { setStyleIndex } from "../../Slices/themeSlice";

const Theme = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const themeData = useAppSelector((state) => state.theme);
  const { styleIndex, headerColor, buttonColor, widgetColor } = themeData;

  useEffect(() => {
    dispatch(setStyleIndex(0));
  }, [location.pathname]);

  return (
    <div className="flex">
      <Widget />
      <div className="mt-[40px] ml-[20px]">
        {styleIndex === 1 && <HeaderColorPalete headerColor={headerColor} />}
        {styleIndex === 2 && <ButtonColorPalete buttonColor={buttonColor} />}
        {styleIndex === 3 && <WidgetColorPalete widgetColor={widgetColor} />}
      </div>
    </div>
  );
};

export default Theme;
