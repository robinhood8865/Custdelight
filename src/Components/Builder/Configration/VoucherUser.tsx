import { useState } from "react";
import Airtable from "../Components/Airtable";
import ChkBtn from "../Components/ChkBtn";

// import CloseBtn from "./CloseBtn";
// import ModulesBtn from "./ModulesBtn";

const VoucherUser = () => {
  return (
    <div className=" w-full h-full  ">
      <div className="mt-[34px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        User Properties
      </div>
      <div>
        <ChkBtn name="First Name" state={true} />
        <ChkBtn name="Last Name" />
        <ChkBtn name="Email Address" />
        <ChkBtn name="Mobile Number" />
      </div>
      <div className="mb-[17px] mt-[34px] font-bold text-[16px] text-black ">
        Transactions
      </div>
      <div>
        <Airtable />
      </div>
    </div>
  );
};

export default VoucherUser;
