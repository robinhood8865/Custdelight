import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const Membershiptypeprop = () => {
  const [membershipType, setMembershipType] = useState("free");
  return (
    <div className=" w-full h-full  ">
      <div className="mt-[34px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        MemberShip Type
      </div>
      <div className="w-full h-[48px]">
        <Select
          label="MemberShip Type"
          onChange={(e: any) => {
            setMembershipType(e);
          }}
          value={membershipType}
        >
          <Option key="freekey" value="free">
            Free
          </Option>
          <Option key="paidkey" value="paid">
            Paid
          </Option>
        </Select>
      </div>
      {membershipType === "paid" && (
        <div>
          <div className="mt-[27px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
            Payment Terms
          </div>
          <div className=" w-full h-[48px]">
            <Select label="Payment Terms">
              <Option>Monthly</Option>
              <Option>Yearly</Option>
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
export default Membershiptypeprop;
