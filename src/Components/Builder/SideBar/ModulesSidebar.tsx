import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { setMemberShip, setVouchers } from "../../../Slices/modulesSlice";
import ModulesBtn from "../Components/ModulesBtn";

const ModulesSidebar = () => {
  const visibleMemberShip = useAppSelector(
    (state) => state.modules.visibleMemberShip
  );

  const visibleVouchers = useAppSelector(
    (state) => state.modules.visibleVouchers
  );

  const visiblePayment = useAppSelector(
    (state) => state.modules.visiblePayment
  );
  const dispatch = useAppDispatch();
  return (
    <div className="h-full w-[340px] bg-white text-black border-[1px] border-l-0 ">
      <div className=" w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[34px] pt-[30px]">
        <div className="">
          <div className="text-[16px] font-bold leading-[20px] mb-[15px]">
            Monetisation
          </div>
          <ModulesBtn
            name="Membership"
            visible={visibleMemberShip}
            enable={true}
          />
          <ModulesBtn name="Vouchers" visible={visibleVouchers} enable={true} />
          <ModulesBtn name="Payment" visible={visiblePayment} enable={true} />
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
