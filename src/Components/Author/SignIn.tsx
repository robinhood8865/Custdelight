import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Icfb_logo from "../../../src/Assets/Images/ic_fb_logo.svg";
import { Input } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import Icgoogle_logo from "../../../src/Assets/Images/ic_google_logo.svg";
import { login } from "../../Services/auth.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setMemebershipconfiguration } from "../../Slices/membershipSlice";
import { setVoucherconfiguration } from "../../Slices/voucherSlice";
import { setThemeconfiguration } from "../../Slices/themeSlice";
import { setSettingconfiguration } from "../../Slices/settingSlice";
import { setModuleconfiguration } from "../../Slices/moduleSlice";

const SignIn = (props: any) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getData = (data: any) => {
    const { __v, _id, id, ...tempdata } = data;
    return tempdata;
  };

  const handleSubmit = (event: any) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const dispatchData = (data: any) => {
      const { module, theme, setting } = data;
      const { membership, voucher, membershipId, voucherId, ...tempModule } =
        module;

      const membershipData = getData(membership[0]);
      dispatch(setMemebershipconfiguration(membershipData));
      const voucherData = getData(voucher[0]);
      dispatch(setVoucherconfiguration(voucherData));
      const moduleData = getData(tempModule);
      dispatch(setModuleconfiguration(moduleData));
      const themeData = getData(theme);
      dispatch(setThemeconfiguration(getData(themeData)));
      const settingData = getData(setting);
      dispatch(setSettingconfiguration(settingData));
      const widget = {
        module: {
          membership: membershipData,
          voucher: voucherData,
          ...moduleData,
        },
        theme: themeData,
        setting: settingData,
      };
      return widget;
    };

    login(email, password).then(
      (response) => {
        const widget = response.widgetdata;
        const loadData = dispatchData(widget);
        if (response.accessToken) {
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("widget", JSON.stringify(loadData));
        }

        toast.success("successfully login");

        navigate("/");
      },
      (error) => {
        const resMessage = error.response.errors[0].msg;
        toast.error(resMessage);
      }
    );
    event.preventDefault();
  };

  return (
    <div className="w-[457px] h-[445px] bg-white p-[32px] font-inter">
      <div className=" font-[700] text-[24px] leading-[32px] text-user-text mb-[32px]">
        Sign in to Custdelight
      </div>
      <div className="text-[24px] leading-[32px] text-user-text mb-[12px] flex">
        <Button className=" rounded-[6px] w-full h-[48px] bg-user-light-blue mr-[16px] flex items-center">
          <div className="">
            <img src={Icgoogle_logo} alt="logo" />
          </div>

          <div className=" font-[500] normal-case w-full text-[14px] leading-[17px] flex justify-center">
            <div>Sign In with Google</div>
          </div>
        </Button>
        <div className="hover:cursor-pointer w-[59px] h-[48px] bg-white border-user-border border-[1px] rounded-[6px] flex items-center justify-center">
          <img src={Icfb_logo} alt="logo" />
        </div>
      </div>
      <div className="h-[38px] flex items-center justify-between mb-[24px]">
        <div className="h-[1px] w-full bg-user-border"></div>
        <div className="m-[12px] h-[17px] w-[14px] text-[14px] leading-[17px] font-[400] text-user-text-disable">
          or
        </div>
        <div className="h-[1px] w-full bg-user-border"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-[24px]">
          <Input
            name="email"
            size="lg"
            className="font-inter text-user-text h-[48px] text-[14px]  font-[500] "
            label="Email address"
          />
        </div>
        <div className="relative">
          <Input
            name="password"
            type={!show ? "password" : ""}
            size="lg"
            className="font-inter text-user-text h-[48px] text-[14px] font-[500]"
            label="Password"
            // icon={<i className="fas fa-heart" />}
          />
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="text-[20px] hover:cursor-pointer text-user-text-disable absolute inset-y-3 right-5 w-[24px] h-[24px]  flex items-center text-sm leading-5"
          >
            {!show && (
              <svg
                xmlns="http://www.w3.orgs/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            {show && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}

            {/* {!show && <i className="fa fa-light fa-eye"></i>}
          {show && <i className="fa fa-light fa-eye-slash"></i>} */}
          </div>
        </div>
        <div className="flex justify-between items-center mt-[24px]">
          <div className="hover:cursor-pointer w-1/3 text-[14px] font-[400] text-user-text">
            Forgot password?
          </div>
          <button
            type="submit"
            className="rounded-[6px] w-[164px] h-[48px] bg-user-main text-center font-[700] normal-case text-[14px] text-white leading-[17px] p-[13px]"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
