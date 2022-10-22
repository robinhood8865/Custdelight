import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";

import {
  setCancellation,
  setMembershipTerms,
} from "../../../Slices/membershipSlice";

const MembershipSettings = () => {
  const dispatch = useAppDispatch();
  const membership = useAppSelector((state) => state.membership);
  const { cancellation, membershipTerms } = membership;
  const [mTerm, setmTerm] = useState(membershipTerms);
  const cancellationOptions = [
    { value: "1 month notice", index: "1" },
    { value: "2 month notice", index: "2" },
  ];
  return (
    <div className=" w-full h-full  ">
      <div className="mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Cancellation
      </div>
      <div className=" w-full h-[48px]">
        <Select
          label="Cancellation"
          onChange={(e: any) => {
            dispatch(setCancellation(parseInt(e)));
          }}
          value={"" + cancellation}
        >
          {cancellationOptions.map((cancellationOption) => (
            <Option value={cancellationOption.index}>
              {cancellationOption.value}
            </Option>
          ))}
        </Select>
      </div>

      <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Payment Terms
      </div>
      <Input
        onBlur={(e: any) => {
          dispatch(setMembershipTerms(mTerm));
        }}
        onChange={(e: any) => {
          setmTerm(e.target.value);
        }}
        value={mTerm}
        label="Payment Terms"
      />
      <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Stripe Integration
      </div>
      <Button className="bg-user-main w-full h-[50px] flex items-center justify-center text-[16px] text-white font-bold leading-[20px]">
        Connected
      </Button>
    </div>
  );
};
export default MembershipSettings;
