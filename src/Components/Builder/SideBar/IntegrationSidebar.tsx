import { Button, Switch } from "@material-tailwind/react";
import Strip_wordmark from "../../../Assets/Images/Stripe_wordmark.svg";
import Google_analytic_logo from "../../../Assets/Images/Google-Analytics-Logo.svg";

const IntegrationSidebar = () => {
  return (
    <div>
      <div className="h-full w-[340px] bg-white text-[#5A5A5A] border-[1px] border-l-0 border-b-0">
        <div className="text-[#5A5A5A] bg-white w-full border-t-[1px] border-[#DFDFDF] p-[20px]">
          <div className="h-[70px] px-[3px] pb-[19px] w-full flex justify-between border-b-[1px] border-user-border cursor-pointer">
            <div className="flex">
              <div className="relative w-[50px] h-[50px] rounded-full border-[1px] border-user-border "></div>

              <img
                className="absolute ml-[2px] mt-[15px] "
                src={Strip_wordmark}
                alt=""
              />

              <div className="ml-[12px] flex items-center text-[16px] font-bold leading-[24px] text-[#5A5A5A] ">
                Stripe Checkout
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7425 0.442578C14.1334 0.0516926 14.7671 0.0516926 15.158 0.442578C15.5489 0.833464 15.5489 1.46722 15.158 1.8581L8.85828 8.15783C8.46775 8.54835 7.83459 8.54835 7.44407 8.15783L1.14434 1.8581C0.75345 1.46722 0.75345 0.833464 1.14434 0.442578C1.53522 0.0516926 2.16897 0.0516926 2.55986 0.442578L8.15117 6.03389L13.7425 0.442578Z"
                  fill="#30313D"
                />
              </svg>
            </div>
          </div>
          <div className="h-[70px] px-[3px] pb-[19px] mt-[21px] w-full flex justify-between border-b-[1px] border-user-border cursor-pointer">
            <div className="flex">
              <div className="relative w-[50px] h-[50px] rounded-full border-[1px] border-user-border "></div>

              <img
                className="absolute ml-[2px] mt-[15px] "
                src={Google_analytic_logo}
                alt=""
              />

              <div className="ml-[12px] flex items-center text-[16px] font-bold leading-[24px] text-[#5A5A5A] ">
                Google Analytics
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7425 0.442578C14.1334 0.0516926 14.7671 0.0516926 15.158 0.442578C15.5489 0.833464 15.5489 1.46722 15.158 1.8581L8.85828 8.15783C8.46775 8.54835 7.83459 8.54835 7.44407 8.15783L1.14434 1.8581C0.75345 1.46722 0.75345 0.833464 1.14434 0.442578C1.53522 0.0516926 2.16897 0.0516926 2.55986 0.442578L8.15117 6.03389L13.7425 0.442578Z"
                  fill="#30313D"
                />
              </svg>
            </div>
          </div>
          <div className="mt-[20px] ml-[15px]">
            <Button className="w-[270px] h-[50px] rounded-[6px] bg-user-main text-[10px] leading-[12px] font-bold flex items-center justify-center ">
              <div className="normal-case text-[15px] leading-[20xp] fond-bold ">
                Submit an integration request
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntegrationSidebar;
