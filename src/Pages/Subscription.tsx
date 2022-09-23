import React from "react";
import NavBar from "../Components/Nav/NavBar";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "@material-tailwind/react";

// import main_picture from "../../../src/Assets/Images/dash_picture.png";
// import vector from "../../../src/Assets/Images/Vector.svg";
// import Path1 from "../../../src/Assets/Images/Path1.svg";
// import Path2 from "../../../src/Assets/Images/Path2.svg";

//import Plan from "../Components/Subscription/Plan";
import Plan from "../Components/Subscription/Plan";
import PlanPro from "../Components/Subscription/PlanPro";
import { Switch } from "@material-tailwind/react";

const Subscription = () => {
  return (
    <div className="w-full h-full min-h-screen bg-white font-inter">
      <NavBar />

      <div className="mt-[32px] ml-[84px] h-full w-[1220px] ">
        <div>
          <div className="text-[24px] leading-[29px] font-bold mb-[10px]">
            Pricing
          </div>
          <div className="text-[16px] leading-[20px] font-[400] text-[#A0A0A0] mb-[25px]">
            Select the best plan that suits your businesds
          </div>
          <div className="h-[24px] w-[310px] flex justify-between text-[16px] leading-[20px] font-[400]">
            <div>Billed Monthly</div>
            <div>
              <Switch color="green" width={20} height={100} />
            </div>
            <div>Billed Annually</div>
          </div>
        </div>

        <div className="flex justify-between">
          <Plan
            name="Startup"
            price="Free"
            detail="This plan allows you to embed your widget on any website of your choice."
            selected="true"
          />
          <PlanPro
            name="Professional"
            price="$99"
            detail="The most popular choice to unlock features that suits most business."
            selected="false"
          />
          <Plan
            name="enterprise"
            price="Talk to us"
            detail="Are you an enterprise? If you have a business requirement, please speak to use today."
            selected="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
