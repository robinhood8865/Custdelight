import Feature from "./Feature";
import { Button } from "@material-tailwind/react";

const PlanPro = (props: any) => {
  return (
    <div>
      <div className="w-[394px] h-[586px] rounded-[8px] border-user-main border-[2px] pl-[19px] pr-[29px] ">
        <div>
          <div className="text-[36px] font-[500] leading-[48px] text-user-main ">
            {props.name}
          </div>
          <div className="mt-[6px] text-[28px] font-[600] leading-[34px] text-user-main flex items-end">
            {props.price}
            <p className="text-[16px] text-gray-500 font-[400]">/year</p>
          </div>
          <div className="mt-[12px] text-[16px] font-[400] leading-[26px] text-[#A0A0A0]">
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
            <Button className="rounded-[8px] w-full h-[52px] text-[16px] leading-[20px] border-[#EAEAEA] bg-user-main border-[1px] font-bold text-white">
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

export default PlanPro;
