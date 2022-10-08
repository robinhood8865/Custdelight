import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";

const VoucherSettings = () => {
  const [isRedemption, setRedemtion] = useState("yes");
  return (
    <div className=" w-full h-full  ">
      <div className="mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Redemption Minimum
      </div>
      <div className=" w-full h-[48px]">
        <Select
          label="Redemption Minimum"
          onChange={(e: any) => {
            setRedemtion(e);
          }}
          value={isRedemption}
        >
          <Option key="yeskey" value="yes">
            Yes
          </Option>
          <Option key="nokey" value="no">
            No
          </Option>
        </Select>
      </div>

      {isRedemption === "yes" && (
        <div>
          <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Redemption Minimum
          </div>

          <Input value={"$200"} label="Redemption Minimum" />
        </div>
      )}
      <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Vouchers Terms
      </div>
      <Input value={"https://www.xxx.com"} label="Vouchers Terms" />
      <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Stripe Integration
      </div>
      <Button className="bg-user-main w-full h-[50px] flex items-center justify-center text-[16px] text-white font-bold leading-[20px]">
        Connected
      </Button>
    </div>
  );
};
export default VoucherSettings;
