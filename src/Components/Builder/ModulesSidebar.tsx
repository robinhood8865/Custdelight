import React, { useState } from "react";
import SubBarBtn from "./SubBarBtn";
import CloseBtn from "./CloseBtn";

const ModulesSidebar = () => {
  return (
    <div className="h-full min-h-screen w-[340px] bg-white text-black border-[1px] border-l-0 ">
      <div className="h-[67px] ml-[26px] mr-[16px] flex justify-between items-center">
        <div className="font-bold text-[16px] leading-[20px] ">Modules</div>
        <CloseBtn />
      </div>
      <div className=" w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[34px] pt-[30px]">
        <div className="">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            Monetisation
          </div>
          <SubBarBtn name="Membership" visible={true} />
          <SubBarBtn name="Vouchers" visible={true} />
          <SubBarBtn name="Payment" visible={true} />
        </div>
        <div className="mt-[29px]">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            eCommerce (Coming soon)
          </div>
          <SubBarBtn name="Itme Sales" visible={false} />
          <SubBarBtn name="Donation" visible={false} />
          <SubBarBtn name="Crowdfunding" visible={false} />
        </div>
        <div className="mt-[29px]">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            Engagement (Coming soon)
          </div>
          <SubBarBtn name="Survey" visible={false} />
          <SubBarBtn name="Google Ratings" visible={false} />
          <SubBarBtn name="Invite Only Events" visible={false} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ModulesSidebar;
