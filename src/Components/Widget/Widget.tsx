import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { IconPath } from "../Builder/Components/IconInput";
import WidgetBox from "./WidgetBox";

const Widget = () => {
  const dispatch = useAppDispatch();
  const module = useAppSelector((state) => state.module);
  const theme = useAppSelector((state) => state.theme);
  const widgetIcon = useAppSelector((state) => state.theme.widgetIcon);

  const { widgetColor } = theme;
  const [visibleWidget, setVisibleWidget] = useState(true);

  return (
    <div className="p-[40px] min-w-[500px]">
      <div className="relative w-[400px] h-[601px] bg-white  tracking-[-0.5px]">
        <button
          onClick={() => {
            setVisibleWidget(!visibleWidget);
          }}
          className="z-10 absolute transition bottom-[-80px] right-0 p-2 rounded-full h-[64px] w-[64px] bg-user-gray shadow-md hover:shadow-lg text-white"
          style={{ backgroundColor: widgetColor }}
        >
          {visibleWidget && (
            <svg
              className="text-white h-13 w-13"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          {!visibleWidget && (
            <img className="rounded" src={IconPath(widgetIcon)} alt="avatar" />
          )}
        </button>
        {visibleWidget && <WidgetBox />}
      </div>
    </div>
  );
};

export default Widget;
