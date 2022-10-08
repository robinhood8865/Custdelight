import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setCancellation,
  setMembershipTerms,
} from "../../../Slices/moduleSlice";

const MembershipSettings = () => {
  const dispatch = useAppDispatch();
  const module = useAppSelector((state) => state.module);
  const { cancellation, membershipTerms } = module;
  return (
    <div className=" w-full h-full  ">
      <div className="mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Cancellation
      </div>
      <div className=" w-full h-[48px]">
        <Select
          label="Cancellation"
          onChange={(e: any) => {
            dispatch(setCancellation(parseInt(e)));
          }}
          value={cancellation.toString()}
        >
          <Option value="1">1 month notice</Option>
          <Option value="2">2 month notice</Option>
        </Select>
      </div>

      <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Membership Terms
      </div>
      <Input value={"https://www.xxx.com"} label="Payment Terms" />
      <div className="mt-[20px] mb-[20px] font-bold text-[16px] text-black leading-[20px]">
        Stripe Integration
      </div>
      <Button className="bg-user-main w-full h-[50px] flex items-center justify-center text-[16px] text-white font-bold leading-[20px]">
        Connected
      </Button>
    </div>
  );
};
export default MembershipSettings;
