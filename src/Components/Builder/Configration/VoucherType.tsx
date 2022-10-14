import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setVoucherType,
  setExpiryTerm,
  setFees,
} from "../../../Slices/voucherSlice";

const VoucherType = () => {
  const dispatch = useAppDispatch();
  const voucher = useAppSelector((state) => state.voucher);
  const { voucherType, expiryTerm, fees } = voucher;
  let voucherfees: number = 0;
  const expiryOptions = [
    { value: "7 Days", index: "1" },
    { value: "14 Days", index: "2" },
    { value: "21 Days", index: "3" },
    { value: "30 Days", index: "4" },
    { value: "2 Months", index: "5" },
    { value: "3 Months", index: "6" },
    { value: "6 Months", index: "7" },
    { value: "12 Months", index: "8" },
  ];

  const voucherTypeOptions = [
    { value: "Free", index: "1" },
    { value: "Paid", index: "2" },
  ];

  return (
    <div className=" w-full h-full  ">
      <div className="mt-[34px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Voucher Type
      </div>
      <div className="w-full h-[48px]">
        <Select
          label="Voucher Type"
          onChange={(e: any) => {
            dispatch(setVoucherType(parseInt(e)));
          }}
          value={voucherType.toString()}
        >
          {voucherTypeOptions.map((voucherTypeOption) => (
            <Option value={voucherTypeOption.index}>
              {voucherTypeOption.value}
            </Option>
          ))}
        </Select>
      </div>

      {voucherType === 2 && (
        <div>
          <div className="mt-[27px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Expiry Terms
          </div>
          <div className=" w-full h-[48px]">
            <Select
              label="Expiry Terms"
              onChange={(e: any) => {
                dispatch(setExpiryTerm(parseInt(e)));
              }}
              value={expiryTerm.toString()}
            >
              {expiryOptions.map((expiryOption) => (
                <Option value={expiryOption.index}>{expiryOption.value}</Option>
              ))}
            </Select>
          </div>
          <div className="mt-[28px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
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
export default VoucherType;
