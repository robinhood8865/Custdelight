import { useState } from "react";
import Airtable from "./Airtable";
import ChkBtn from "./ChkBtn";
import CloseBtn from "./CloseBtn";
import SubBarBtn from "./SubBarBtn";

const UserProp = () => {
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

export default UserProp;
