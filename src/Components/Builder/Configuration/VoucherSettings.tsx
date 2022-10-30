import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setRedemptionType,
  setRedemption,
  setVoucherTerms,
} from "../../../Slices/voucherSlice";

const VoucherSettings = () => {
  const dispatch = useAppDispatch();
  const voucher = useAppSelector((state) => state.voucher);
  const { redemptionType, redemption } = voucher;
  let voucherRedemption = 0;

  return (
    <div className="relative w-full h-full  ">
      <div className="mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Redemption Minimum
      </div>
      <div className=" w-full h-[48px]">
        <Select
          label="Redemption Minimum"
          onChange={(e: any) => {
            e.toString() === "yes"
              ? dispatch(setRedemptionType(true))
              : dispatch(setRedemptionType(false));
          }}
          value={redemptionType ? "yes" : "no"}
        >
          <Option key="yeskey" value="yes">
            Yes
          </Option>
          <Option key="nokey" value="no">
            No
          </Option>
        </Select>
      </div>

      {redemptionType === true && (
        <div>
          <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Redemption Minimum
          </div>

          <Input
            onChange={(e: any) => {
              console.log("e", e);
              console.log("value", e.target.value);
              console.log("length", e.target.value.length);
              e.target.value.length <= 2 || e.target.value.slice(2, 4) === "0x"
                ? (voucherRedemption = 0)
                : (voucherRedemption = parseFloat(e.target.value.slice(2)));

              dispatch(setRedemption(voucherRedemption));
            }}
            value={"$ " + redemption}
            label="Redemption Minimum"
          />
        </div>
      )}

      <div className="absolute w-full top-[435px]">
        <div className="mb-[20px] font-bold text-[16px] text-black leading-[20px]">
          Stripe Integration
        </div>
        <Button className="bg-user-main w-full h-[50px] flex items-center justify-center text-[16px] text-white font-bold leading-[20px]">
          Connected
        </Button>
      </div>
    </div>
  );
};
export default VoucherSettings;
