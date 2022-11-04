import React from "react";
import { Link } from "react-router-dom";
import "tw-elements";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import ApiService from "../../Services/ApiService";
import toast from "react-hot-toast";

const BuilderNavBar = () => {
  const navigate = useNavigate();
  const membership = useAppSelector((state) => state.membership);
  const voucher = useAppSelector((state) => state.voucher);
  const module = useAppSelector((state) => state.module);

  const theme = useAppSelector((state) => state.theme);
  console.log(
    "🚀 ~ file: BuilderNavBar.tsx ~ line 17 ~ BuilderNavBar ~ theme",
    theme
  );
  const setting = useAppSelector((state) => state.setting);

  const onPublish = async (e: any) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const userObj = user && JSON.parse(user);
    const widgetId = userObj.widgetId1;

    const widget = {
      module: {
        ...module,
        membership: membership,
        voucher: voucher,
      },
      theme,
      setting,
    };

    const data = { widgetId, widget };

    const error = await ApiService.updateWidget(data);
    console.log("res", error);
    localStorage.removeItem("widget");
    localStorage.setItem("widget", JSON.stringify(widget));
    toast.success("successfully published");

    // axios.post(API_URL + "/module", data).then((response) => {
    //   console.log(
    //     "🚀 ~ file: BuilderNavBar.tsx ~ line 24 ~ axios.post ~ response",
    //     response
    //   );
    //   return response.data;
    // });
  };

  return (
    <div className="absolute w-full min-w-[1405px] h-[54px] bg-user-main flex">
      <Link to="/" className="w-[70px] h-full  hover:cursor-pointer">
        <svg
          className="mt-[13px] mx-[19px] "
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g id="home">
            <g id="Glyph">
              <path
                d="M1.33636 8.25096L11 2.75166L20.6636 8.25094C21.1971 8.23382 21.6747 7.91131 21.887 7.42068C22.1887 6.72325 21.8655 5.91431 21.1652 5.61386L11.5461 0.112198C11.1974 -0.0373995 10.8022 -0.0373995 10.4535 0.112198L0.834458 5.61386C0.328056 5.83111 0 6.32756 0 6.87666C0 7.62126 0.594334 8.22762 1.33636 8.25096Z"
                fill="white"
              />
              <path
                d="M11 5.12474L2.0625 10.2108V20.625C2.0625 21.3844 2.67811 22 3.4375 22H8.25V15.125C8.25 14.3656 8.86561 13.75 9.625 13.75H12.375C13.1344 13.75 13.75 14.3656 13.75 15.125V22H18.5625C19.3219 22 19.9375 21.3844 19.9375 20.625V10.2108L11 5.12474Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </Link>

      <div className=" text-white  h-full w-[200px] flex  items-center font-bold text-[20px] leading-[20px] ">
        Widget builder
      </div>

      <div className="w-full h-full flex justify-end items-center ">
        <Button className="w-[130px] h-[30px] rounded-[40px] bg-[#F56A6A] mr-[10px] text-[14px] text-white leading-[17px] font-bold flex items-center justify-center ">
          <div>Priview</div>
        </Button>
        <Button
          onClick={onPublish}
          className="w-[130px] h-[30px] rounded-[40px] bg-black mr-[10px] text-[14px] text-white leading-[17px] font-bold flex items-center justify-center"
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default BuilderNavBar;
