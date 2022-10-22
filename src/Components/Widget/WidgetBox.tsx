import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

const WidgetBox = (props: any) => {
  const dispatch = useAppDispatch();
  const module = useAppSelector((state) => state.module);
  const theme = useAppSelector((state) => state.theme);
  const { styleIndex, headerColor, buttonColor, widgetColor } = theme;
  const { visibleMemberShip, visibleVouchers, visiblePayment } = module;

  return (
    <div className=" min-w-[500px]">
      <div className="relative w-[400px] h-[601px] bg-white rounded-md shadow-[0_20px_30px_0_rgba(28,040,50,0.2)] tracking-[-0.5px]">
        <div>
          <div className="cursor-pointer z-10 absolute top-[15px] h-[20px] w-[20px] right-[15px] rounded-full bg-black p-[2.2px] opacity-50">
            <svg
              className="text-white h-4 w-4 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                // strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="relative ">
            <div
              className={`static w-full h-[250px] rounded-t-md`}
              style={{ backgroundColor: headerColor }}
            >
              <div className="absolute top-[25px] left-[25px] text-white font-bold">
                Welcome to
              </div>
              <div className="absolute top-[45px] left-[25px] text-white text-[24px] font-bold">
                Restaurant ABC
              </div>

              {visibleMemberShip && (
                <div className="absolute  w-[363px] h-[256px] rounded-md  bg-white left-[19px] top-[111px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
                  <p className="mt-[35px] text-center left-[94px] text-[20px] leading-[23px] text-black font-bold">
                    Become a member
                  </p>
                  <p className="mt-[14px]  text-center left-[94px] text-[16px] ml-[13px] mr-[10px] leading-[24px] text-user-gray">
                    With more ways to unlock exciting perks, this is your all
                    access pass to exculsive rewards.
                  </p>
                  <button
                    className="cursor-default mt-[14px] w-[130px] h-[50px] ml-[110px] rounded-[5px] bg-user-main text-white"
                    style={{ backgroundColor: buttonColor }}
                  >
                    <p className="text-[16px] font-bold">Join now</p>
                  </button>
                  <p className="mt-[7px]  text-center left-[94px] text-[16px]  text-user-gray">
                    Already have an account?
                  </p>
                  <button className="cursor-default mb-[17px] ml-[147px] text-light-sky underline ">
                    Sigin in
                  </button>
                </div>
              )}
            </div>

            {visibleVouchers && (
              <div className="absolute mt-[129px] w-[363px] h-[192px] rounded-md  bg-white ml-[19px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)]">
                <p className="mt-[35px]  text-center text-[20px] font-bold text-black leading-[23px]">
                  Vouchers
                </p>
                <p className="mt-[14px]  text-center left-[94px] text-[16px]  text-user-gray">
                  Buy exculsive vouchers and enjoy savings
                </p>
                <button
                  className="cursor-default mt-[14px] w-[130px] h-[50px] ml-[110px] rounded-[5px] bg-user-main"
                  style={{ backgroundColor: buttonColor }}
                >
                  <p className="text-[16px] text-white font-bold">Browse</p>
                </button>
              </div>
            )}
          </div>
          <div className="mt-[390px] w-full">
            <div className="text-user-gray flex justify-center text-[16px]">
              <p className="">Powered by</p>
              <p className="ml-[5px] font-bold">Custdelight</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetBox;
