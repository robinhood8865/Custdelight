import React from "react";
import logo from "../../../src/Assets/Images/Logo.svg";
import tabler_help from "../../../src/Assets/Images/tabler_help.svg";
import tabler_account from "../../../src/Assets/Images/tabler_account.svg";
import { Link } from "react-router-dom";
import "tw-elements";

const NavBar = () => {
  return (
    <div className="relative w-full h-[54px] bg-user-main flex">
      <div className="w-[60px] h-full flex items-center justify-center hover:bg-user-main-hover hover:cursor-pointer">
        <img src={logo} />
      </div>
      <div className="w-[132px] h-full">
        <div className="dropdown navbar-dropdown relative w-full h-full flex items-center justify-center font-bold ">
          <button
            className="dropdown-toggle w-full h-full bg-user-main text-white hover:bg-user-main-hover hover:cursor-pointer focus:bg-user-main-hover active:bg-user-main-hover  active:text-white transition duration-150
          ease-in-out flex items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <div className="ml-[37px] text-[13px]">Widget</div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          <ul
            className="w-full h-[54px] dropdown-menu hidden bg-user-main hover:bg-user-main-hover z-50"
            aria-labelledby="dropdownMenuButton2"
          >
            <li className="w-full h-full ">
              <a
                className="
              dropdown-item
              text-sm
              w-full h-full 
              block
              whitespace-nowrap
              bg-transparent
              text-white 
              text-[13px]
              active:bg-user-main-hover
              active:text-white
            "
                href="#"
              >
                <div className="h-full ml-[37px] flex items-center">New</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full flex justify-end items-center ">
        <div className="w-[58px] h-[54px] mr-[13px] flex justify-center items-center">
          <div className="dropdown-menu-right">
            <div className="dropdown relative text-[13px] h-[54px] font-bold">
              <button
                className="dropdown-toggle h-full bg-user-main text-white transition duration-150 ease-in-out
                      flex items-center whitespace-nowrap "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="w-[40px] h-[40px] py-[5px] rounded-full bg-white flex items-center justify-center">
                  <img
                    className="text-user-main hover:text-user-main-hover"
                    src={tabler_help}
                  />
                </div>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <ul
                className=" 
                w-[195px] 
          dropdown-menu
          dropdown-right 
          absolute
          hidden
          bg-user-main
          z-50
          float-left
          bg-clip-padding
          text-[13px]
        "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className=" dropdown -item py-2 px-4  block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    Chat with us
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    Slack Community
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown -item py-2 px-4  block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    Submit Feedback
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    What's New
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[58px] h-[54px] mr-[18px]">
          <div className="dropdown-menu-right">
            <div className="w-full h-[54px] dropdown  relative flex justify-center items-center">
              <button
                className="
          dropdown-toggle
          h-full 
          
          bg-user-main
          text-white
          leading-tight
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
                  {/* <img
                    className="text-user-main hover:text-user-main-hover"
                    src={tabler_account}
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_73_904)">
                      <path
                        d="M12 21.0001C16.9706 21.0001 21 16.9707 21 12.0001C21 7.02956 16.9706 3.00012 12 3.00012C7.02944 3.00012 3 7.02956 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001Z"
                        stroke="#610BA1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 9.00012H9.01"
                        stroke="#610BA1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 9.00012H15.01"
                        stroke="#610BA1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 13.0001C8 14.061 8.42143 15.0784 9.17157 15.8285C9.92172 16.5787 10.9391 17.0001 12 17.0001C13.0609 17.0001 14.0783 16.5787 14.8284 15.8285C15.5786 15.0784 16 14.061 16 13.0001M16 13.0001H8"
                        stroke="#610BA1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_73_904">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <ul
                className="absolute w-[195px]
          dropdown-menu 
          min-w-max
          hidden
          bg-user-main
          z-50
          text-[13px]
          font-bold
          bg-clip-padding
          border-none
        "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    MyAccount
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover "
                    href="#"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <Link
                    className=" dropdown -item py-2 px-4 block w-full whitespace-nowrap
              bg-transparent text-white hover:bg-user-main-hover text-left"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
