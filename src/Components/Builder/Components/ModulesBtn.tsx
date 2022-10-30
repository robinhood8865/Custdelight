import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setMemberShip,
  setVouchers,
  setPayment,
  setModuleIndex,
} from "../../../Slices/moduleSlice";

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const ModulesBtn = (props: any) => {
  const dispatch = useAppDispatch();

  const { name, visible, enable, select } = props;

  return (
    <div className="mb-[10px] ">
      <button
        onClick={() => {
          if (enable === true) {
            // console.log(enable, visible);
            switch (name) {
              case "Membership":
                dispatch(setModuleIndex(1));
                break;
              case "Vouchers":
                dispatch(setModuleIndex(2));
                break;
              case "Payment":
                dispatch(setModuleIndex(3));
                break;
              default:
                break;
            }
          }
        }}
        className={`${enable === true ? "bg-white" : "bg-user-border"} ${
          select === true ? "border-user-main" : "border-user-border"
        } w-[280px] h-[100px] rounded-[10px] p-0 border-[1px] border-user-border `}
      >
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-[136px] h-full">
            <div className="w-full flex justify-center mt-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_69_924)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.66893 7.8339L8.36246 8.65949C8.16851 9.18404 7.86341 9.66043 7.46806 10.056C7.07272 10.4516 6.5965 10.7569 6.07205 10.9511L5.24521 11.2576L6.0708 11.5641C6.59535 11.758 7.07174 12.0631 7.4673 12.4585C7.86286 12.8538 8.16823 13.3301 8.36246 13.8545L8.66893 14.6801L8.97415 13.8545C9.16822 13.3298 9.47352 12.8533 9.86909 12.4578C10.2647 12.0622 10.7411 11.7569 11.2658 11.5628L12.0914 11.2576L11.2658 10.9511C10.7413 10.7572 10.2649 10.4521 9.8693 10.0568C9.47374 9.66141 9.16837 9.18519 8.97415 8.66074L8.66893 7.83515V7.8339ZM9.95861 4.11247C9.51579 2.9141 7.82207 2.9141 7.378 4.11247L6.01701 7.79262C5.94815 7.97877 5.83982 8.14782 5.69948 8.28817C5.55913 8.42852 5.39008 8.53684 5.20393 8.60571L1.52377 9.96669C0.325409 10.4108 0.325409 12.1057 1.52377 12.5485L5.20393 13.9095C5.39008 13.9784 5.55913 14.0867 5.69948 14.2271C5.83982 14.3674 5.94815 14.5365 6.01701 14.7226L7.378 18.4028C7.82207 19.6011 9.51704 19.6011 9.95861 18.4028L11.3208 14.7226C11.3897 14.5365 11.498 14.3674 11.6384 14.2271C11.7787 14.0867 11.9478 13.9784 12.1339 13.9095L15.8141 12.5485C17.0112 12.1045 17.0112 10.4095 15.8141 9.96669L12.1339 8.60571C11.9478 8.53684 11.7787 8.42852 11.6384 8.28817C11.498 8.14782 11.3897 7.97877 11.3208 7.79262L9.95861 4.11247ZM15.5489 2.97915L15.4701 3.1918C15.376 3.44528 15.2283 3.67544 15.037 3.86652C14.8457 4.05759 14.6154 4.20507 14.3618 4.29885L14.1491 4.37766L14.3618 4.45646C14.6155 4.55038 14.8459 4.69805 15.0372 4.88935C15.2285 5.08065 15.3762 5.31105 15.4701 5.56476L15.5489 5.77742L15.6277 5.56476C15.7216 5.31105 15.8693 5.08065 16.0606 4.88935C16.2519 4.69805 16.4823 4.55038 16.736 4.45646L16.9486 4.37766L16.736 4.29885C16.4823 4.20493 16.2519 4.05726 16.0606 3.86597C15.8693 3.67467 15.7216 3.44426 15.6277 3.19055L15.5489 2.9779V2.97915ZM16.1356 0.958941C16.0912 0.839036 16.0113 0.735587 15.9064 0.662524C15.8015 0.589461 15.6767 0.550293 15.5489 0.550293C15.4211 0.550293 15.2963 0.589461 15.1914 0.662524C15.0865 0.735587 15.0065 0.839036 14.9622 0.958941L14.2967 2.75649C14.2654 2.84094 14.2162 2.91763 14.1526 2.98132C14.0889 3.04501 14.0122 3.09419 13.9277 3.1255L12.1289 3.79098C12.009 3.83529 11.9056 3.91528 11.8325 4.02017C11.7594 4.12506 11.7203 4.24983 11.7203 4.37766C11.7203 4.50549 11.7594 4.63025 11.8325 4.73514C11.9056 4.84003 12.009 4.92002 12.1289 4.96433L13.9265 5.62981C14.0109 5.66112 14.0876 5.7103 14.1513 5.77399C14.215 5.83768 14.2642 5.91437 14.2955 5.99883L14.961 7.79637C15.0053 7.91628 15.0853 8.01973 15.1902 8.09279C15.295 8.16585 15.4198 8.20502 15.5476 8.20502C15.6755 8.20502 15.8002 8.16585 15.9051 8.09279C16.01 8.01973 16.09 7.91628 16.1343 7.79637L16.7985 5.99883C16.83 5.91425 16.8794 5.83748 16.9433 5.77378C17.0072 5.71008 17.0841 5.66097 17.1688 5.62981L18.9664 4.96433C19.0863 4.92002 19.1897 4.84003 19.2628 4.73514C19.3358 4.63025 19.375 4.50549 19.375 4.37766C19.375 4.24983 19.3358 4.12506 19.2628 4.02017C19.1897 3.91528 19.0863 3.83529 18.9664 3.79098L17.1701 3.12675C17.0854 3.0956 17.0084 3.04648 16.9445 2.98278C16.8806 2.91909 16.8312 2.84232 16.7998 2.75774L16.1356 0.958941Z"
                    fill="#30313D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_69_924">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="normal-case mt-[8px] text-[12px] font-bold leading-[15px] text-black">
              {name}
            </div>
          </div>

          <div
            onClick={() => {
              if (enable === true) {
                // console.log(enable, visible);
                switch (name) {
                  case "Membership":
                    dispatch(setMemberShip(!visible));
                    break;
                  case "Vouchers":
                    dispatch(setVouchers(!visible));
                    break;
                  case "Payment":
                    dispatch(setPayment(!visible));
                    break;
                  default:
                    break;
                }
              }
            }}
            className={`
              ${
                enable
                  ? visible
                    ? "bg-[#00B761]"
                    : "bg-[#FFA800]"
                  : "bg-[#5A5A5A]"
              }
              w-[40px] h-[40px] rounded-full border-[1px]  flex justify-center items-center mr-[22px] border-user-border 
              `}
          >
            {enable && visible && (
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
            )}
            {enable && !visible && (
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
            )}
            {!enable && !visible && (
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
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ModulesBtn;
