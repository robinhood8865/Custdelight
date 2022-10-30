import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { setModuleIndex } from "../../../Slices/moduleSlice";

import ModulesBtn from "../Components/ModulesBtn";

const ModulesSidebar = () => {
  const dispatch = useAppDispatch();
  const module = useAppSelector((state) => state.module);
  const { visibleMemberShip, visibleVouchers, visiblePayment, moduleIndex } =
    module;
  useEffect(() => {
    dispatch(setModuleIndex(1));
  }, []);
  return (
    <div className="h-full w-[340px] bg-[#FCFCFC] text-black border-[1px] border-l-0 border-b-0 ">
      <div className=" w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[34px] pt-[30px]">
        <div className="">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px] ">
            Monetisation
          </div>
          {/* className=
          {`${
            enable === true ? "bg-white" : "bg-user-border"
          } w-[280px] h-[100px] rounded-[10px] p-0 border-[1px] border-user-border `} */}
          <ModulesBtn
            // className={moduleIndex === 1 ? "border-user-main border-1" : ""}

            name="Membership"
            visible={visibleMemberShip}
            enable={true}
            select={moduleIndex === 1 ? true : false}
          />
          <ModulesBtn
            name="Vouchers"
            visible={visibleVouchers}
            enable={true}
            select={moduleIndex === 2 ? true : false}
          />
          <ModulesBtn
            name="Payment"
            visible={visiblePayment}
            enable={true}
            select={moduleIndex === 3 ? true : false}
          />
        </div>
        <div className="mt-[29px]">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            eCommerce (Coming soon)
          </div>
          <ModulesBtn name="Itme Sales" enable={false} />
          <ModulesBtn name="Donation" enable={false} />
          <ModulesBtn name="Crowdfunding" enable={false} />
        </div>
        <div className="mt-[29px]">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            Engagement (Coming soon)
          </div>
          <ModulesBtn name="Survey" enable={false} />
          <ModulesBtn name="Google Ratings" enable={false} />
          <ModulesBtn name="Invite Only Events" enable={false} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ModulesSidebar;
