import React, { useState } from "react";

import Widget from "../../Components/Widget/Widget";

const Modules = (props: any) => {
  const { name } = props;
  return (
    <div className="h-full flex items-center justify-center ">
      <Widget />
    </div>
  );
};

export default Modules;
