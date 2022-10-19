import { Button, Switch, Input } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setSubDomain,
  setCustomerPortal,
  setLogoUrl,
  setBranding,
  setSenderEmail,
  setSenderName,
} from "../../../Slices/settingSlice";
import EditInput from "../Components/EditInput";

const GeneralSidebar = (props: any) => {
  const dispatch = useAppDispatch();
  const userInfo = localStorage.getItem("user");
  const userObj = userInfo && JSON.parse(userInfo);
  const widgetId = userObj.widgetId1;
  console.log(widgetId);

  const { subDomain, customerPortal } = useAppSelector(
    (state) => state.setting
  );
  return (
    <div>
      <div className="h-full w-[340px] bg-white text-[#5A5A5A] border-r-[1px] ">
        <div className="text-[#5A5A5A] bg-white w-full border-t-[1px] border-user-border pl-[26px] pr-[23px] pt-[25px]">
          <div className="">
            <div className=" mb-[10px] font-bold text-[16px] leading-[24px]">
              Widget Name
            </div>
            <Input value={"Widget (" + widgetId + ")"} label="Widget Name" />
            <div className="mt-[25px] mb-[10px] font-bold text-[16px] leading-[24px]">
              Sub Domain
            </div>
            <Input
              onBlur={(e: any) => {
                // dispatch(setMembershipTerms(mTerm));
              }}
              onChange={(e: any) => {
                dispatch(setSubDomain(e.target.value));
              }}
              value={subDomain}
              label="Sub Domain"
            />
            <div className="mt-[25px] mb-[10px] font-bold text-[16px] leading-[24px]">
              Customer Portal
            </div>
            <Input
              onBlur={(e: any) => {
                // dispatch(setMembershipTerms(mTerm));
              }}
              onChange={(e: any) => {
                dispatch(setCustomerPortal(e.target.value));
              }}
              value={customerPortal}
              label="Customer Portal"
            />
          </div>
          <div className="mt-[15px] mb-[22px] text-[12px] font-[400] leading-[18px]">
            This is where your customers can log in and view thier orders,
            subscriptions, downloads and license keys.
          </div>
          <div>
            <div className="flex justify-between ">
              <div className="font-bold text-[16px] leading-[24px]">Logo</div>
              <Button className="w-[80px] h-[30px] rounded-[6px] bg-[#F56A6A] text-[10px] leading-[12px] font-bold flex items-center justify-center ">
                <div>Upgrade</div>
              </Button>
            </div>
            <div className="text-[12px] font-[400] leading-[18px] mb-[9px] ">
              Add logo to your widget
            </div>
            <div className="border-[2px] rounded-[10px] border-dashed border-black/25">
              <div className="mt-[24px] flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM7 7H4C3.44772 7 3 7.44772 3 8C3 8.55229 3.44772 9 4 9H7V12C7 12.5523 7.44772 13 8 13C8.55229 13 9 12.5523 9 12V9H12C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7H9V4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4V7Z"
                    fill="#30313D"
                  />
                </svg>
              </div>
              <div className="flex justify-center text-[13px] text-black font-[400] leading-[15px] mt-[13px] ">
                Seletct a file or drag and drop here
              </div>
              <div className="text-[12px] text-[400] leading-[14px] flex justify-center mb-[17px] ">
                JPG, PNG or PDF file zie no more than 10MB
              </div>
            </div>
          </div>
          <div className="mt-[40px] ">
            <div className="flex justify-between ">
              <div className="text-[16px] font-bold leading-[24px] text-[#5A5A5A]  ">
                CustDelight Branding
              </div>
              <Button className="w-[80px] h-[30px] rounded-[6px] bg-[#F56A6A] text-[10px] leading-[12px] font-bold flex items-center justify-center ">
                <div>Upgrade</div>
              </Button>
            </div>
            <div className="mt-[13px] flex justify-between items-end">
              <div className="text-[12px] font-[400] leading-[18px] w-[190px]">
                Show a made with Custdelight badge on your widget
              </div>
              <div>
                <Switch color="green" defaultChecked />
                {/* 
                //Switch
                <label
                  htmlFor="checked-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="checked-toggle"
                    className="sr-only peer"
                    checked
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#65C466]"></div>
                  <span className=" text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralSidebar;
