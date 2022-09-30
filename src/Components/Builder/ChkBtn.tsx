import { Switch } from "@material-tailwind/react";
const ChkBtn = (props: any) => {
  return (
    <div className="text-[#5A5A5A] mb-[14px] h-[48px] w-full rounded-[8px] border-[1px] border-user-border pl-[20px] pr-[16px] flex items-center justify-between">
      <div>{props.name}</div>
      <div>
        <div className="flex justify-center">
          <Switch color="green" value="1" />
        </div>
      </div>
    </div>
  );
};
export default ChkBtn;
