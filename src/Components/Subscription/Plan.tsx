import Feature from "./Feature";
const Plan = (props: any) => {
  return (
    <div>
      <div className="w-[394px] h-[586px] rounded-[8px] border-[#EAEAEA] border-[1px] pl-[19px] pt-[14px] pr-[29px]">
        <div>
          <div className="text-[16px] font-[500] leading-[21px] ">
            {props.name}
          </div>
          <div className="mt-[11px] text-[28px] font-[600] leading-[34px] ">
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
            <button className="w-full h-[52px] text-[16px] leading-[20px] font-[400] border-[#EAEAEA] active:bg-user-main border-[1px] active:font-bold active:text-white">
              {props.selected.toString() === "true"
                ? "Currnet Plan"
                : "Select Plan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
