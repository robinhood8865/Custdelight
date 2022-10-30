// import {
//   Input,
//   Select,
//   Option,
//   Textarea,
//   Button,
// } from "@material-tailwind/react";
// import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../../App/hooks";
// import {
//   setVoucherType,
//   setExpiryTerm,
//   setFees,
// } from "../../../Slices/voucherSlice";

const VoucherItem = () => {
  // const dispatch = useAppDispatch();
  // const voucher = useAppSelector((state) => state.voucher);
  // const { voucherType, expiryTerm, fees } = voucher;
  // let voucherfees: number = 0;
  // const expiryOptions = [
  //   { value: "7 Days", index: "1" },
  //   { value: "14 Days", index: "2" },
  //   { value: "21 Days", index: "3" },
  //   { value: "30 Days", index: "4" },
  //   { value: "2 Months", index: "5" },
  //   { value: "3 Months", index: "6" },
  //   { value: "6 Months", index: "7" },
  //   { value: "12 Months", index: "8" },
  // ];

  // const voucherTypeOptions = [
  //   { value: "Free", index: "1" },
  //   { value: "Paid", index: "2" },
  // ];

  return (
    <div className=" w-full h-full  ">
      {/* <div className="TitleOfVoucher">
        <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
          Title of Voucher
        </div>
        <Input
          type="string"
          // onChange={(e: any) => {
          //   dispatch(setFees(parseFloat(e.target.value)));
          // }}
          // onBlur={(e: any) => {
          //   if (e.target.value === "") {
          //     dispatch(setFees(0));
          //   }
          // }}
          // value={fees}
          label="Title of Voucher"
        />
      </div>
      <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
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
          <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
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
          <div className="UsualPrice">
            <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
              Usual Price
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
                label="Usual Price"
              />
            </div>
          </div>
          <div className="DiscountedPrice">
            <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
              Discounted Price
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
                label="Discounted Price"
              />
            </div>
          </div>
          <div className="VouchersTerms">
            <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
              Vouchers Terms
            </div>
            <Textarea
              className="h-[125px]"
              // onBlur={(e: any) => {
              //   dispatch(setMembershipTerms(mTerm));
              // }}
              // onChange={(e: any) => {
              //   setmTerm(e.target.value);
              // }}
              // value={mTerm}
              label="Enter Vouchers terms and conditions"
              // placeholder="Enter Vouchers terms and conditions"
            />
          </div>
          <div className="SaveAndDelete flex items-center justify-between mt-[22px]">
            <Button className="bg-user-main w-[130px] h-[50px]">Save</Button>
            <div className="mr-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  d="M0 3V4H14.0035V3C14.0035 2.44772 13.5558 2 13.0035 2H8.99808C8.99808 0.89543 8.10265 0 6.99808 0C5.89351 0 4.99808 0.89543 4.99808 2H1C0.447715 2 0 2.44772 0 3Z"
                  fill="#30313D"
                />
                <path
                  d="M12.0456 15.0499L12.4981 6H1.49808L1.95058 15.0499C1.97719 15.5821 2.41645 16 2.94933 16H11.0468C11.5797 16 12.019 15.5821 12.0456 15.0499Z"
                  fill="#30313D"
                />
              </svg>
            </div>
          </div>
          <div className="cursor-pointer  mt-[38px] BacktoVoucherItemList flex">
            <div>
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
                  d="M3.41683 6.99995H15C15.5523 6.99995 16 7.44767 16 7.99995C16 8.55224 15.5523 8.99995 15 8.99995H3.41683L8.00814 13.5913C8.39903 13.9822 8.39903 14.6159 8.00814 15.0068C7.61726 15.3977 6.98351 15.3977 6.59262 15.0068L0.292893 8.70706C-0.0976311 8.31653 -0.0976311 7.68337 0.292893 7.29284L6.59262 0.993115C6.98351 0.60223 7.61726 0.60223 8.00814 0.993115C8.39903 1.384 8.39903 2.01775 8.00814 2.40864L3.41683 6.99995Z"
                  fill="#30313D"
                />
              </svg>
            </div>
            <div className="ml-[12px] text-black text-[16px] leading-[20px] font-bold">
              Back to Voucher Item List
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
export default VoucherItem;
