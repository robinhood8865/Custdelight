import React from "react";
import { Component } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { register } from "../../Services/auth.service";

import { Button } from "@material-tailwind/react";
import Icfb_logo from "../../../src/Assets/Images/ic_fb_logo.svg";
import Icgoogle_logo from "../../../src/Assets/Images/ic_google_logo.svg";
import { Input, Checkbox } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import toast from "react-hot-toast";

interface IUser {
  id?: any | null;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  roles?: Array<string>;
}

const schema = yup.object().shape({
  email: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  password: yup.string().required(),
});

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const initialValues: IUser = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  };

  const handleRegister = (event: any) => {
    const email = event.target.email.value;
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const password = event.target.password.value;
    const checkAgree = event.target.checkAgree.checked;
    console.log(email, firstname, lastname, password, checkAgree);

    register(firstname, lastname, email, password).then(
      (response) => {
        toast.success("successfully registered");
        console.log(response);
        // localStorage.setItem("token", JSON.stringify(response.data.));
        setMessage(response.data.message);
        setSuccessful(true);
        navigate("/signin");
      },
      (error) => {
        // console.log(error);
        const resMessage = error.response.data.errors[0].msg;
        setMessage(resMessage);
        console.log(resMessage);
        toast.error(resMessage);
        setSuccessful(false);
      }
    );
    event.preventDefault();
  };

  return (
    <div className="w-[457px] h-[575px] bg-white p-[32px] font-inter">
      <div className=" font-[700] text-[24px] leading-[32px] text-user-text mb-[32px]">
        Sign up to Custdelight
      </div>
      <div className="text-[24px] leading-[32px] text-user-text mb-[12px] flex">
        <Button className="rounded-[6px] w-full h-[48px] bg-user-light-blue mr-[16px] flex items-center">
          <div className="">
            <img src={Icgoogle_logo} alt="log" />
          </div>

          <div className="font-[500] normal-case w-full text-[14px] leading-[17px] flex justify-center">
            <div>Sign up with Google</div>
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

      <form onSubmit={handleRegister}>
        <div className="mb-[24px]">
          <Input
            name="email"
            size="lg"
            className="font-inter text-user-text h-[48px] w-full text- text-[14px]  font-[500]"
            label="Email"
          />
        </div>
        <div className="mb-[24px] flex w-full flex-auto">
          <div className="mr-[15px] [&>div]:min-w-[100px]">
            <Input
              name="firstname"
              size="lg"
              className="font-inter text-user-text h-[48px] w-full text- text-[14px]  font-[500]"
              label="First name"
            />
          </div>

          <div className="min-w-[100px] [&>div]:min-w-[100px]">
            <Input
              name="lastname"
              size="lg"
              className="font-inter text-user-text h-[48px] text-[14px]  font-[500] "
              label="Last name"
            />
          </div>
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

            {!show && <i className="fa fa-light fa-eye"></i>}
            {show && <i className="fa fa-light fa-eye-slash"></i>}
          </div>
        </div>
        <Button
          disabled={!agree}
          className="mt-[24px] rounded-[6px] w-full h-[48px] bg-user-main"
          type="submit"
        >
          <p className="font-[700] normal-case text-[14px] leading-[17px]">
            Sign up
          </p>
        </Button>

        <div className="flex justify-between mt-[18px]">
          <Checkbox
            onClick={() => {
              setAgree(!agree);
            }}
            name="checkAgree"
            className="checked:bg-user-check-bg  checked:border-user-check-bg checked:before:bg-user-check-bg"
          />
          <div className="text-[12px] font-[400] text-user-text-disable mt-[6px]">
            By clicking Create account, I agree that I have read and accepted
            the Terms of Use and Privacy Policy.
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
