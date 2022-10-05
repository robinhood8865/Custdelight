import { Input, Select, Option } from "@material-tailwind/react";

const Membershipsettingsprop = () => {
  return (
    <div className=" w-full h-full  ">
      <div className=" w-full h-[48px]">
        <Select label="Cancellation">
          <Option>1 month notice</Option>
          <Option>2 month notice</Option>
        </Select>
      </div>

      <div className="mt-[28px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Membership Terms
      </div>
      <Input value={"https://www.xxx.com"} label="Payment Terms" />
      <div className="mt-[28px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Stripe Integration
      </div>
      <Input value={"$99.99"} label="Stripe Integration" />
    </div>
  );
};
export default Membershipsettingsprop;
