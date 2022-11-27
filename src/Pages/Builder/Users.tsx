import React, { useState } from "react";
import ModulesBtn from "../../Components/Builder/Components/ModulesBtn";
import CloseBtn from "../../Components/Builder/Components/CloseBtn";
import { Button } from "@material-tailwind/react";
import Step1 from "../../Components/User/Step1";
import Step2 from "../../Components/User/Step2";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import { setAirtableState } from "../../Slices/integrationSlice";

const Modules = (props: any) => {
  const { name } = props;
  const dispatch = useAppDispatch();
  const integration = useAppSelector((state) => state.integration);
  const { airtableState, airtableAPIKey } = integration;

  return (
    <div className=" w-[850px] h-full  flex items-center justify-center">
      <div>
        <div className="flex justify-between px-[100px]">
          <div className="relative">
            {(airtableState > 0) && (
              <div className="w-[253px] h-[2px] absolute left-[64px] top-[10px] border-t-[4px] border-black z-10"></div>
            )}
            {airtableState > 1 && (
              <div className="w-[253px] h-[2px] absolute left-[331px] top-[10px] border-t-[4px] border-black z-10"></div>
            )}
            <div className="flex justify-center text-[#333539] text-[16px] items-center z-20 ">
              <div className="h-[24px] w-[24px] flex items-center justify-center">
              {airtableState === 0  ? (
                <div className="w-[18px] h-[18px] rounded-full border-[2px]  border-black"></div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.4975 8.99521C16.107 8.60468 15.4738 8.60468 15.0833 8.99521L11 13.0858L9.20711 11.2929C8.81658 10.9024 8.18342 10.9024 7.79289 11.2929C7.40237 11.6834 7.40237 12.3166 7.79289 12.7071L10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L16.4975 10.4094C16.888 10.0189 16.888 9.38573 16.4975 8.99521Z"
                    fill="#30313D"
                  />
                </svg>
              )}
              </div>
            </div>
            <div className="mt-[10px] flex justify-center font-bold">
              Step 1
            </div>
            <div className="mt-[10px] flex justify-center font-bold">
              Setup Airtable
            </div>
          </div>
          <div className="">
            <div className="flex justify-center text-[#333539] text-[16px] z-20 ">
              <div className= "w-[24px] h-[24px] flex items-center justify-center">
              {airtableState < 2 ? (
                <div className="w-[18px] h-[18px] rounded-full border-[2px]  border-black"></div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.4975 8.99521C16.107 8.60468 15.4738 8.60468 15.0833 8.99521L11 13.0858L9.20711 11.2929C8.81658 10.9024 8.18342 10.9024 7.79289 11.2929C7.40237 11.6834 7.40237 12.3166 7.79289 12.7071L10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L16.4975 10.4094C16.888 10.0189 16.888 9.38573 16.4975 8.99521Z"
                    fill="#30313D"
                  />
                </svg>
              )}
              </div>
            </div>
            <div className="mt-[10px] flex justify-center font-bold">
              Step 2
            </div>
            <div className="mt-[10px] flex justify-center font-bold">
              Connect Base
            </div>
          </div>
          <div className="">
            <div className="flex justify-center text-[#333539] text-[16px]  ">
              <div className="w-[24px] h-[24px] flex items-center justify-center">
              {airtableState < 2 ? (
                <div className="w-[18px] h-[18px] rounded-full border-[2px]  border-black"></div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.4975 8.99521C16.107 8.60468 15.4738 8.60468 15.0833 8.99521L11 13.0858L9.20711 11.2929C8.81658 10.9024 8.18342 10.9024 7.79289 11.2929C7.40237 11.6834 7.40237 12.3166 7.79289 12.7071L10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L16.4975 10.4094C16.888 10.0189 16.888 9.38573 16.4975 8.99521Z"
                    fill="#30313D"
                  />
                </svg>
              )}
              </div>
            </div>
            <div className="mt-[10px] flex justify-center font-bold">
              Step 3
            </div>
            <div className="mt-[10px] flex justify-center font-bold">
              Connect Users
            </div>
          </div>
        </div>

        {airtableState === 0 && <Step1 />}
        {(airtableState === 1 || airtableState === 2) && <Step2 />}
        {/* {airtableState === 2 && <Step1 />} */}
      </div>
    </div>
  );
};

export default Modules;
