import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";

import AddVoucher from "./AddVoucher";

const VoucherItem = () => {
  const dispatch = useAppDispatch();
  const voucher = useAppSelector((state) => state.voucher);
  const [addVoucher, setAddVoucher] = useState(false);
  const [voucherIndex, setVoucherIndex] = useState(-1);
  const { vouchers } = voucher;
  // console.log(
  //   "🚀 ~ file: VoucherItem.tsx ~ line 12 ~ VoucherItem ~ vouchers",
  //   vouchers
  // );
  // if (vouchers.length !== 0) setVoucherIndex(vouchers.length);
  // console.log(
  //   "🚀 ~ file: VoucherItem.tsx ~ line 13 ~ VoucherItem ~ length",
  //   vouchers.length
  // );

  return (
    <div className=" w-full h-full  ">
      {addVoucher && (
        <AddVoucher setAddVoucher={setAddVoucher} voucherIndex={voucherIndex} />
      )}
      {!addVoucher && vouchers.length !== 0 && (
        <div className="ListofVoucher border-b-[1px] border-user-border">
          <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            List of Vouchers
          </div>
          {vouchers.map((voucher, index) => (
            <div className="Vouchers flex mt-[12px] mb-[12px] justify-between items-center text-[14px] leading-[21px] font-[400]">
              <div className="flex justify-between w-[238px]">
                <div className="VoucherName">{voucher.voucherTitle}</div>
                <div className="VoucherPrice">
                  {voucher.voucherType === 1
                    ? "Free"
                    : "$" + voucher.voucherUsualPrice}
                </div>
              </div>

              <div
                onClick={() => {
                  setVoucherIndex(index);
                  setAddVoucher(true);
                }}
                className={`EditVoucher cursor-pointer mr-[5px] id=${index}`}
              >
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
                    d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM9.58579 7H4C3.44772 7 3 7.44772 3 8C3 8.55229 3.44772 9 4 9H9.58579L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L8.70711 3.29289C8.31658 2.90237 7.68342 2.90237 7.29289 3.29289C6.90237 3.68342 6.90237 4.31658 7.29289 4.70711L9.58579 7Z"
                    fill="#30313D"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}
      {!addVoucher && (
        <div className="AddAnotherVoucher mt-[31px]">
          <div
            onClick={() => {
              setAddVoucher(true);
              setVoucherIndex(-1);
            }}
            className="flex cursor-pointer"
          >
            <div className="Plusbtn">
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
            <div className="AddAnotherVoucher ml-[12px] text-[16px] font-bold leading-[20px]">
              Add Another Voucher
            </div>
          </div>
          <div className="mt-[13px] text-[12px] text-[#657378] leading-[14px] tracking-[-0.5px]">
            You can add voucher items by clicking the plus button.
          </div>
        </div>
      )}
      {/* <div className="mt-[22px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
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
