import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { number } from "yup";

import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setMembershipType,
  setPaymentTerm,
  setFees,
} from "../../../Slices/membershipSlice";

const MembershipType = () => {
  const dispatch = useAppDispatch();

  const membership = useAppSelector((state) => state.membership);
  const { membershipType, paymentTerm, fees } = membership;

  console.log(
    "🚀 ~ file: MembershipType.tsx ~ line 17 ~ MembershipType ~ membershipType, paymentTerm, fees",
    membershipType,
    paymentTerm,
    fees
  );

  const membershipTypeOptions = [
    { value: "Free", index: "1" },
    { value: "Paid", index: "2" },
  ];
  const paymentOptions = [
    { value: "Monthly", index: "1" },
    { value: "Yearly", index: "2" },
  ];

  return (
    <div className=" w-full h-full  ">
      <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
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
          {membershipTypeOptions.map((membershipTypeOption) => (
            <Option value={membershipTypeOption.index}>
              {membershipTypeOption.value}
            </Option>
          ))}
        </Select>
      </div>
      {membershipType === 2 && (
        <div>
          <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Payment Terms
          </div>
          <div className=" w-full h-[48px]">
            <Select
              label="Payment Terms"
              onChange={(e: any) => {
                dispatch(setPaymentTerm(parseInt(e)));
              }}
              value={"" + paymentTerm}
            >
              {paymentOptions.map((paymentOption) => (
                <Option value={paymentOption.index}>
                  {paymentOption.value}
                </Option>
              ))}
            </Select>
          </div>
          <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Fees
          </div>
          <div className="relative">
            <div className="absolute top-[8px] left-[10px] text-gray-500 ">
              $
            </div>
            <Input
              type="number"
              className="pl-[23px]"
              onChange={(e: any) => {
                dispatch(setFees(parseFloat(e.target.value)));
              }}
              onBlur={(e: any) => {
                if (e.target.value === "") {
                  dispatch(setFees(0));
                }
              }}
              value={fees}
              label="Fees"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default MembershipType;
