import React from "react";
import { Button } from "@material-tailwind/react";
import CustDeligth_logo from "../../src/Assets/Images/white_logo_transparent_background.svg";
import { Link, Outlet, useLocation } from "react-router-dom";

import SignIn from "../Components/Author/SignIn";
import SignUp from "../Components/Author/SignUp";

const Author = () => {
  const location = useLocation();
  return (
    <div className="relative w-screen h-screen min-h-[700px] min-w-[500px] grid grid-cols-3 ">
      <div className="hidden md:block">
        <div className="h-full bg-user-main flex items-center justify-center">
          <div className="w-[320px] h-[249px]  ">
            <div></div>
            <img src={CustDeligth_logo} />
          </div>
          <div className="text-white absolute bottom-[67px] flex">
            <div>Having troubles?</div>
            <div className="underline hover:cursor-pointer ml-1">Get Help</div>
          </div>
        </div>
      </div>

      <div className="relative col-span-3 md:col-span-2 h-full bg-white ">
        {location.pathname === "/signin" ? (
          <Link
            to="signup"
            className="absolute text-[14px] font-[500] text-user-text top-[48px] right-[61px] h-[20px] flex"
          >
            New user? Create an account
          </Link>
        ) : (
          <Link
            to="signin"
            className="absolute text-[14px] font-[500] text-user-text top-[48px] right-[61px] h-[20px] flex"
          >
            Existing user? Login here
          </Link>
        )}
        <div className="h-full flex items-center justify-center">
          <Outlet />
          <div className="absolute bottom-[48px] w-[385px] h-[34px]  text-[12px] leading-[17px] font-[400] text-user-text-disable">
            <div className="flex">
              <div>Protected by reCAPTCHA and subject to the</div>
              <div className="text-user-main hover:cursor-pointer ml-1">
                Cuboid Privacy Policy
              </div>
            </div>
            <div className="flex">
              <div>and</div>
              <div className="text-user-main hover:cursor-pointer ml-1">
                Terms of Service.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
