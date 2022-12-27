import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";

import AddVoucher from "./AddVoucher";

const VoucherItem = () => {
  const dispatch = useAppDispatch();
  const voucher = useAppSelector((state) => state.voucher);
  const [addVoucher, setAddVoucher] = useState(false);
  const [voucherIndex, setVoucherIndex] = useState(-1);
  const { vouchers } = voucher;

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
    </div>
  );
};
export default VoucherItem;
