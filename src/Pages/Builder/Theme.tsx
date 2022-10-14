import React, { useState } from "react";
import { useAppSelector } from "../../App/hooks";
import ColorPalete from "../../Components/Builder/Components/ColorPalete";

import Widget from "../../Components/Widget/Widget";

const Theme = () => {
  const themeData = useAppSelector((state) => state.theme);
  const { styleIndex, headerColor, buttonColor, widgetColor } = themeData;
  let color = "";
  switch (styleIndex) {
    case 1:
      color = headerColor;
      break;
    case 2:
      color = buttonColor;
      break;
    case 3:
      color = widgetColor;
      break;
    default:
      break;
  }
  return (
    <div className=" flex">
      <Widget />
      <div className="mt-[40px] ml-[20px]">
        {styleIndex === 0 ? (
          ""
        ) : (
          <ColorPalete styleIndex={styleIndex} mycolor={color} />
        )}
      </div>
    </div>
  );
};

export default Theme;
