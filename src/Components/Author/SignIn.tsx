import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../../Slices/auth";
import { clearMessage } from "../../Slices/message";

import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Icfb_logo from "../../../src/Assets/Images/ic_fb_logo.svg";
import { Input } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import Icgoogle_logo from "../../../src/Assets/Images/ic_google_logo.svg";

const SignIn = (props: any) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { message } = useSelector((state: any) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is requried!"),
    password: Yup.string().required("This field is requried!"),
  });

  const handleLogin = (formValue: any) => {
    const { email, password } = formValue;
    setLoading(true);

    // dispatch(login({ email, password }))
    //   .unwrap()
    //   .then(() => {
    //     props.history.psuh("/profile");
    //     window.location.reload();
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };
  if (isLoggedIn) {
    // return <Redirect to="/profile" />;
  }
  return (
    <div className="w-[457px] h-[445px] bg-white p-[32px] font-inter">
      <div className=" font-[700] text-[24px] leading-[32px] text-user-text mb-[32px]">
        Sign in to Custdelight
      </div>
      <div className="text-[24px] leading-[32px] text-user-text mb-[12px] flex">
        <Button className="rounded-[6px] w-full h-[48px] bg-user-light-blue mr-[16px] flex items-center">
          <div className="">
            <img src={Icgoogle_logo} />
          </div>

          <div className="font-[500] normal-case w-full text-[14px] leading-[17px] flex justify-center">
            <div>Sign In with Google</div>
          </div>
        </Button>
        <div className="hover:cursor-pointer w-[59px] h-[48px] bg-white border-user-border border-[1px] rounded-[6px] flex items-center justify-center">
          <img src={Icfb_logo} />
        </div>
      </div>
      <div className="h-[38px] flex items-center justify-between mb-[24px]">
        <div className="h-[1px] w-full bg-user-border"></div>
        <div className="m-[12px] h-[17px] w-[14px] text-[14px] leading-[17px] font-[400] text-user-text-disable">
          or
        </div>
        <div className="h-[1px] w-full bg-user-border"></div>
      </div>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      ></Formik> */}
      <div className="mb-[24px]">
        <Input
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
              stroke-width="3"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
          {show && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
        <Link
          className="rounded-[6px] w-[164px] h-[48px] bg-user-main text-center font-[700] normal-case text-[14px] text-white leading-[17px] p-[13px]"
          to="/"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
