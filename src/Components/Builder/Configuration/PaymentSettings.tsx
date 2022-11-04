import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setPaymentconfiguration,
  setPublisableKey,
  setSecretKey,
} from "../../../Slices/paymentSlice";

const PaymentSettings = () => {
  const dispatch = useAppDispatch();
  const payment = useAppSelector((state) => state.payment);
  const { publishableKey, secretKey } = payment;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative w-full h-full  ">
      <div className="mb-[25px] font-bold text-[14px] text-black leading-[17px]">
        Stripe Checkout
      </div>
      <div className="mb-[30px] mt-[20px] font-bold text-[14px] text-black leading-[17px]">
        <div className="flex">
          <p className="mr-[4px]">Copy your</p>
          <p className="cursor-pointer mr-[4px] text-[#198DDB]">
            Stripe account's
          </p>
          <p className="mr-[4px]">Publishable</p>
        </div>
        <div className="flex">
          <p className="mr-[4px]">key and paste it here. Learn more</p>
          <p className="cursor-pointer mr-[4px] text-[#198DDB]">here</p>
          <p className="mr-[4px]">.</p>
        </div>
      </div>
      <Input
        onChange={(e: any) => {
          dispatch(setPublisableKey(e.target.value));
        }}
        value={publishableKey}
        label="Publishable key"
      />
      <div className="mb-[20px] mt-[30px] font-bold text-[14px] text-black leading-[17px]">
        <div className="flex">
          <p className="mr-[4px]">Copy your</p>
          <p className="cursor-pointer mr-[4px] text-[#198DDB]">
            Stripe account's
          </p>
          <p className="mr-[4px]">Secret key</p>
        </div>
        <div className="flex">
          <p className="mr-[4px]">paste it here. Learn more</p>
          <p className="cursor-pointer mr-[4px] text-[#198DDB]">here</p>
          <p className="mr-[4px]">.</p>
        </div>
      </div>
      <Input
        onChange={(e: any) => {
          dispatch(setSecretKey(e.target.value));
        }}
        value={secretKey}
        label="Secret key"
      />
      <div className="SaveAndDelete flex  items-center justify-between mt-[65px]">
        <Button onClick={() => {}} className="bg-user-main w-[130px] h-[50px]">
          Save
        </Button>
        <div onClick={() => {}} className="cursor-pointer mr-[8px]">
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
        <Dialog open={open} handler={handleOpen} size="xs">
          <DialogHeader>Remove Voucher</DialogHeader>
          <DialogBody divider>Do you want to remove this voucher?</DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                handleOpen();
              }}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <div className="absolute w-full top-[435px]"></div>
    </div>
  );
};
export default PaymentSettings;
