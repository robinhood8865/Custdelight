import { Switch } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import {
  setUseFirstName,
  setUseLastName,
  setUseEmail,
  setUseMobileNumber,
} from "../../../Slices/membershipSlice";
import {
  setVoucherFirstName,
  setVoucherLastName,
  setVoucherEmail,
  setVoucherMobileNumber,
} from "../../../Slices/voucherSlice";

const ChkBtn = (props: any) => {
  const dispatch = useAppDispatch();
  const { name } = props;
  const membership = useAppSelector((state) => state.membership);
  const voucher = useAppSelector((state) => state.voucher);
  const module = useAppSelector((state) => state.module);
  const { useFirstName, useLastName, useEmail, useMobileNumber } = membership;
  const {
    voucherFirstName,
    voucherLastName,
    voucherEmail,
    voucherMobileNumber,
  } = voucher;

  const { moduleIndex } = module;

  return (
    <div className="text-[#5A5A5A] mb-[14px] h-[48px] w-full rounded-[8px] border-[1px] border-user-border pl-[20px] pr-[16px] flex items-center justify-between">
      <div>{name}</div>
      <div>
        <div className="flex justify-center">
          <Switch
            onChange={(e) => {
              switch (moduleIndex) {
                case 1:
                  switch (e.target.value) {
                    case "First Name":
                      dispatch(setUseFirstName(e.target.checked));
                      break;
                    case "Last Name":
                      dispatch(setUseLastName(e.target.checked));
                      break;
                    case "Email Address":
                      dispatch(setUseEmail(e.target.checked));
                      break;
                    case "Mobile Number":
                      dispatch(setUseMobileNumber(e.target.checked));
                      break;
                    default:
                      break;
                  }
                  break;
                case 2:
                  switch (e.target.value) {
                    case "First Name":
                      dispatch(setVoucherFirstName(e.target.checked));
                      break;
                    case "Last Name":
                      dispatch(setVoucherLastName(e.target.checked));
                      break;
                    case "Email Address":
                      dispatch(setVoucherEmail(e.target.checked));
                      break;
                    case "Mobile Number":
                      dispatch(setVoucherMobileNumber(e.target.checked));
                      break;
                    default:
                      break;
                  }
                  break;
                default:
                  break;
              }

              console.log(e.target.value, e.target.checked);
            }}
            checked={
              moduleIndex === 1
                ? name === "First Name"
                  ? useFirstName
                  : name === "Last Name"
                  ? useLastName
                  : name === "Email Address"
                  ? useEmail
                  : name === "Mobile Number"
                  ? useMobileNumber
                  : false
                : moduleIndex === 2
                ? name === "First Name"
                  ? voucherFirstName
                  : name === "Last Name"
                  ? voucherLastName
                  : name === "Email Address"
                  ? voucherEmail
                  : name === "Mobile Number"
                  ? voucherMobileNumber
                  : false
                : false
            }
            color="green"
            value={name}
          />
        </div>
      </div>
    </div>
  );
};
export default ChkBtn;
