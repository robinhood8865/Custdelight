import React from "react";
import NavBar from "../../Components/Nav/NavBar";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "@material-tailwind/react";

import main_picture from "../../../src/Assets/Images/dash_picture.png";
import vector from "../../../src/Assets/Images/Vector.svg";
import Path1 from "../../../src/Assets/Images/Path1.svg";
import Path2 from "../../../src/Assets/Images/Path2.svg";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen  font-inter">
      <NavBar />
      <div className="mt-[90px] w-full h-full flex justify-center">
        <div className="w-[1177px] min-w-[1177px] h-[205px]">
          <div className="w-full h-full bg-user-dashbtn-bg border-[1px] rounded-[10px] border-user-dashbtn-border flex ">
            <div className="w-[185px] mt-[25px] ml-[40px] ">
              <div className="w-full h-[135px] bg-gradient-to-b from-user-dash-grad1 to-user-dash-grad2 rounded-[10px] flex items-center justify-center">
                <div className="w-[60px] h-[60px] rounded-full bg-[#FFA800] flex items-center justify-center">
                  <div>
                    <img src={vector} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center font-bold text-[14px] leading-[17px] mt-[11px]">
                Create your first wediget
              </div>
            </div>
            <div className="m-[25px] ">
              <div className="text-[#333539] font-bold text-[30px] leading-[32px]">
                Embed Widget to your website today
              </div>
              <div className="text-[#4D4D4D] font-[400] text-[14px] leading-[22px]">
                Custdelight widget allow syou to offer loyalty bsed campaign to
                embed on your websites.
              </div>
              {/* <Button>Button</Button> */}
              <Button className="mt-[33px] rounded-[6px] w-[119px] h-[48px] bg-black mr-[16px] flex items-center justify-center">
                Tutorial
              </Button>
            </div>
            <div className="mt-[-10px]">
              <img src={main_picture} alt="" />
            </div>
          </div>
          <div className="w-full h-full mt-[11px] flex">
            <div className="relative w-1/2 h-[205px] bg-user-dashbtn-bg border-[1px] rounded-[10px] border-user-dashbtn-border flex">
              <img className="absolute" src={Path1} alt="" />
              <div className="my-[25px] ml-[35px] ">
                <div className="text-[#333539] font-bold text-[30px] leading-[32px]">
                  Connect to stripe
                </div>
                <div className="text-[#4D4D4D] font-[400] text-[14px] leading-[22px]">
                  Start collecting payments on your widget.
                </div>
                {/* <Button>Button</Button> */}
                <Button className="absolute mt-[55px] rounded-[6px] w-[119px] h-[48px]  bg-black mr-[16px] flex items-center justify-center">
                  Connect
                </Button>
              </div>
              <div className="mt-[-10px]"></div>
            </div>
            <div className="w-[4px]"></div>
            <div className="relative w-1/2 h-[205px] bg-user-dashbtn-bg border-[1px] rounded-[10px] border-user-dashbtn-border flex">
              <img className="absolute" src={Path2} alt="" />
              <div className="my-[25px] ml-[35px] ">
                <div className="text-[#333539] font-bold text-[30px] leading-[32px]">
                  You are on free plan
                </div>
                <div className="text-[#4D4D4D] font-[400] text-[14px] leading-[22px]">
                  Compare the differece between free and paid plans.
                </div>

                <Button className="absolute mt-[60px] rounded-[6px] w-[119px] h-[48px]  bg-black mr-[16px] flex items-center justify-center">
                  View
                </Button>
              </div>
              <div className="mt-[-10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
