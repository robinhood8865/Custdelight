import Feature from "./Feature";
import { Button } from "@material-tailwind/react";
const Plan = (props: any) => {
  return (
    <div>
      <div className="w-[394px] h-[586px] rounded-[8px] border-[#EAEAEA] border-[1px] pl-[19px] pt-[14px] pr-[29px] text-black">
        <div>
          <div className="text-[16px] font-[500] leading-[21px] text-black ">
            {props.name}
          </div>
          <div className="mt-[11px] text-[28px] font-[600] leading-[34px] text-black">
            {props.price}
          </div>
          <div className="mt-[20px] text-[16px] font-[400] leading-[26px] text-[#A0A0A0]">
            {props.detail}
          </div>
        </div>
        <div className="border-[#F0F0F0] border-[1px] w-full my-[24px]"></div>
        <div>
          <div className="mb-[25px] text-[16px] font-[500] leading-[20px] text-black ">
            Features included:
          </div>
          <div className="mb-[16px]">
            <Feature />
          </div>
          <div className="mb-[16px]">
            <Feature />
          </div>
          <div className="mb-[16px]">
            <Feature />
          </div>
          <div className="mb-[16px]">
            <Feature />
          </div>
          <div className="mb-[16px]">
            <Feature />
          </div>
          <div className="mb-[16px]">
            <Feature />
          </div>
          <div className="mt-[32 px]">
            <Button className="rounded-[8px] w-full h-[52px] text-[16px] leading-[20px] border-[#EAEAEA] bg-white border-[1px] font-[400] text-[#ADA7A7]">
              {props.selected.toString() === "true"
                ? "Currnet Plan"
                : "Select Plan"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
