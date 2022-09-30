import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

import Sparkle from "../../../src/Assets/Images/sparkle.svg";

const SubBarBtn = (props: any) => {
  const [check, setCheck] = useState(false);
  return (
    <button
      onClick={() => {
        if (props.visible === true) setCheck(!check);
      }}
      className="mb-[10px]"
    >
      <div
        className={`${
          props.visible === true ? "bg-white" : "bg-user-border"
        } w-[280px] h-[100px] rounded-[10px] border-[1px] border-user-border `}
      >
        <div className="w-full h-full        flex justify-between items-center">
          <div className="w-[136px] h-full">
            <div className="w-full flex justify-center">
              <img className="mt-[30px]" src={Sparkle} alt="sparkle" />
            </div>
            <div className="mt-[8px] text-[12px] font-bold leading-[15px] text-black">
              {props.name}
            </div>
          </div>

          {props.visible && check && (
            <div className="w-[40px] h-[40px] rounded-full border-[1px]  flex justify-center items-center mr-[22px] border-user-border bg-[#00B761]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g id="check">
                  <path
                    id="Glyph"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29744 13.2131L0.292893 8.2546C-0.0976311 7.86082 -0.0976311 7.22236 0.292893 6.82857C0.683417 6.43478 1.31658 6.43478 1.70711 6.82857L6.00068 11.0535L14.2889 2.79534C14.6794 2.40155 15.3126 2.40155 15.7031 2.79534C16.0936 3.18913 16.0936 3.82759 15.7031 4.22138L6.69941 13.2085C6.31158 13.5954 5.68777 13.5974 5.29744 13.2131Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          )}
          {props.visible && !check && (
            <div className="w-[40px] h-[40px] rounded-full border-[1px]  flex justify-center items-center mr-[22px] border-user-border bg-[#FFA800]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M12 17H22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 12L17 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
          {!props.visible && (
            <div className="w-[40px] h-[40px] rounded-full border-[1px]  flex justify-center items-center mr-[22px] border-user-border bg-[#5A5A5A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M12 17H22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 12L17 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default SubBarBtn;
