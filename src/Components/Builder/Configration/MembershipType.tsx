import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setMembershipType,
  setPaymentTerm,
  setFees,
} from "../../../Slices/moduleSlice";

const MembershipType = () => {
  const dispatch = useAppDispatch();

  const module = useAppSelector((state) => state.module);
  const { membershipType, paymentTerm, fees } = module;

  return (
    <div className=" w-full h-full  ">
      <div className="mt-[34px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        MemberShip Type
      </div>
      <div className="w-full h-[48px]">
        <Select
          label="MemberShip Type"
          onChange={(e: any) => {
            dispatch(setMembershipType(parseInt(e)));
          }}
          value={"" + membershipType}
        >
          <Option key="freekey" value="1">
            Free
          </Option>
          <Option key="paidkey" value="2">
            Paid
          </Option>
        </Select>
      </div>
      {membershipType === 2 && (
        <div>
          <div className="mt-[27px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Payment Terms
          </div>
          <div className=" w-full h-[48px]">
            <Select
              label="Payment Terms"
              onChange={(e: any) => {
                dispatch(setPaymentTerm(e));
              }}
              value={paymentTerm}
            >
              <Option value="monthly">Monthly</Option>
              <Option value="yearly">Yearly</Option>
            </Select>
          </div>
          <div className="mt-[28px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Fees
          </div>
          <Input value={"$99.99"} label="Fees" />
        </div>
      )}
    </div>
  );
};
export default MembershipType;
