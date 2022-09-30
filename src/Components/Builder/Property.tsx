import UserProp from "./UserProp";
import CloseBtn from "./CloseBtn";
import Membershiptypeprop from "./Membershiptypeprop";
import Membershipsettingsprop from "./Membershipsettingsprop copy";
import React, { useState } from "react";

const Property = () => {
  const [type, setType] = useState(0);
  return (
    <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px]  ">
      <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
        <div className="font-bold text-[16px] leading-[20px] ">
          Configuration
        </div>
        <CloseBtn />
      </div>
      <div className=" w-full border-t-[1px] border-[#DFDFDF] pl-[27px] pr-[23px] pt-[25px]">
        <div className=" w-full h-full mb-[35px] ">
          <div className="h-[40px] flex justify-between ">
            <div
              onClick={() => {
                setType(0);
              }}
              className="cursor-pointer h-full w-[50px] ml-[2px]"
            >
              <div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={type === 0 ? "#812FBF" : "#30313D"}
                  >
                    <g id="globe">
                      <path
                        id="Glyph"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.36914 16H8.99914C9.55143 16 9.99914 15.5523 9.99914 15C9.99914 14.717 9.88156 14.4614 9.69258 14.2795C11.1556 13.6157 12.4324 12.5077 13.2975 11.0156C15.5066 7.20541 14.1956 2.33337 10.3693 0.133575C9.89102 -0.141401 9.27942 0.0217819 9.00328 0.498053C8.72714 0.974323 8.89102 1.58333 9.36931 1.8583C12.2391 3.50815 13.2223 7.16218 11.5655 10.0198C9.90861 12.8774 6.23906 13.8565 3.36931 12.2067C2.89102 11.9317 2.27942 12.0949 2.00328 12.5712C1.72714 13.0474 1.89101 13.6564 2.36931 13.9314C2.74287 14.1462 3.1266 14.3275 3.51701 14.4764C3.42323 14.6287 3.36914 14.808 3.36914 15C3.36914 15.5523 3.81686 16 4.36914 16ZM1.61914 7C1.61914 9.62335 3.74579 11.75 6.36914 11.75C8.99249 11.75 11.1191 9.62335 11.1191 7C11.1191 4.37665 8.99249 2.25 6.36914 2.25C3.74579 2.25 1.61914 4.37665 1.61914 7Z"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className={`${
                    type === 0 ? "text-user-main" : "text-black"
                  } mt-[7px]  flex justify-center text-[12px] font-bold leading-[15px]`}
                >
                  Type
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setType(1);
              }}
              className="cursor-pointer h-full w-[50px] "
            >
              <div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={type === 1 ? "#812FBF" : "#30313D"}
                  >
                    <path d="M8.1962 0H7.8038C7.70679 0 7.60982 0.00403343 7.51314 0.0120898C5.58682 0.172616 4.15536 1.86434 4.31589 3.79066L4.4801 5.76123C4.63266 7.59189 6.163 9 8 9C9.837 9 11.3673 7.59189 11.5199 5.76123L11.6841 3.79066C11.6922 3.69398 11.6962 3.59701 11.6962 3.5C11.6962 1.567 10.1292 0 8.1962 0Z" />
                    <path d="M11.9001 9.46256C10.8772 10.4176 9.50449 11 8 11C6.49551 11 5.12276 10.4176 4.09985 9.46256L2.34082 10.1222C0.932802 10.6502 0 11.9962 0 13.5V15C0 15.5523 0.447715 16 1 16H15C15.5523 16 16 15.5523 16 15V13.5C16 11.9962 15.0672 10.6502 13.6592 10.1222L11.9001 9.46256Z" />
                  </svg>
                </div>
                <div className="mt-[8px] flex justify-center text-[12px] font-bold leading-[15px]">
                  <div className={type === 1 ? "text-user-main" : "text-black"}>
                    Users
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setType(2);
              }}
              className="cursor-pointer h-full w-[50px] mr-[20px]"
            >
              <div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g id="settings">
                      <path
                        id="Glyph"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.51276 13.4695L6.74076 15.9015C7.15097 15.9663 7.57155 16 8 16C8.42845 16 8.84903 15.9663 9.25924 15.9015L9.48724 13.4695C9.95704 13.342 10.4026 13.1557 10.8155 12.9188L12.6963 14.4772C13.3794 13.981 13.981 13.3794 14.4772 12.6963L12.9188 10.8155C13.1557 10.4026 13.342 9.95704 13.4695 9.48724L15.9015 9.25924C15.9663 8.84903 16 8.42845 16 8C16 7.57155 15.9663 7.15097 15.9015 6.74076L13.4695 6.51276C13.342 6.04296 13.1557 5.5974 12.9188 5.18449L14.4772 3.30372C13.981 2.62058 13.3794 2.01897 12.6963 1.5228L10.8155 3.08116C10.4026 2.84431 9.95704 2.65795 9.48724 2.53051L9.25924 0.0985386C8.84903 0.0336806 8.42845 0 8 0C7.57155 0 7.15097 0.0336806 6.74076 0.0985386L6.51276 2.53051C6.04296 2.65795 5.5974 2.84431 5.18449 3.08116L3.30372 1.5228C2.62058 2.01897 2.01897 2.62058 1.5228 3.30372L3.08116 5.18449C2.84431 5.5974 2.65795 6.04296 2.53051 6.51276L0.0985386 6.74076C0.0336806 7.15097 0 7.57155 0 8C0 8.42845 0.0336806 8.84903 0.0985386 9.25924L2.53051 9.48724C2.65795 9.95704 2.84431 10.4026 3.08116 10.8155L1.5228 12.6963C2.01897 13.3794 2.62058 13.981 3.30372 14.4772L5.18449 12.9188C5.5974 13.1557 6.04296 13.342 6.51276 13.4695ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                        fill={type === 2 ? "#812FBF" : "#30313D"}
                      />
                    </g>
                  </svg>
                </div>
                <div className="mt-[8px] flex justify-center text-[12px] font-bold leading-[15px]">
                  <div className={type === 2 ? "text-user-main" : "text-black"}>
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {type === 0 && <Membershiptypeprop />}
        {type === 1 && <UserProp />}
        {type === 2 && <Membershipsettingsprop />}
      </div>
    </div>
  );
};

export default Property;
