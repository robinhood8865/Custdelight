import React, { useState } from "react";
import ColorPalete from "../../Components/Builder/Components/ColorPalete";

import Widget from "../../Components/Widget/Widget";

const Theme = () => {
  return (
    <div className=" flex">
      <Widget />
      <div className="mt-[40px] ml-[20px]">
        <ColorPalete />
      </div>
    </div>
  );
};

export default Theme;
