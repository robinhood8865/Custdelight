import { Button, Switch, Input } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { setSenderEmail, setSenderName } from "../../../Slices/settingSlice";
import EditInput from "../Components/EditInput";

const EmailSignatureSidebar = (props: any) => {
  const dispatch = useAppDispatch();
  const { senderName, senderEmail } = useAppSelector((state) => state.setting);
  return (
    <div>
      <div className="h-full w-[340px] bg-white text-[#5A5A5A] border-r-[1px] ">
        <div className="text-[#5A5A5A] bg-white w-full border-t-[1px] border-user-border pl-[29px] pr-[23px] pt-[25px]">
          <div className="mt-[-5px] mb-[22px] text-[12px] px-[7px] font-[400] leading-[18px]">
            Format your email sender name and email signature below, this will
            appear in all emails sent to users from your application.
          </div>
          <div className="">
            <div className="mt-[30px] mb-[10px] font-bold text-[16px] leading-[24px]">
              Sender Name
            </div>
            <Input
              onChange={(e: any) => {
                dispatch(setSenderName(e.target.value));
              }}
              value={senderName}
              label="Sender Name"
            />
            <div className="mt-[30px] mb-[10px] font-bold text-[16px] leading-[24px]">
              Sender Email
            </div>
            <Input
              onChange={(e: any) => {
                dispatch(setSenderEmail(e.target.value));
              }}
              value={senderEmail}
              label="Sender Email"
            />
          </div>

          <Button className="w-[290px] normal-case h-[50px] mt-[150px] rounded-[6px] bg-user-main text-[16px] leading-[20px] font-bold flex items-center justify-center ">
            <div>Save</div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EmailSignatureSidebar;
