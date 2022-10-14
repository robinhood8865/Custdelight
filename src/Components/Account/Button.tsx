import React from "react";
import Sparkle from "../../../src/Assets/Images/sparkle.svg";

const Button = (props: any) => {
  const { name } = props;
  return (
    <button className="">
      <div className="border-user-border w-[100px] h-[100px] rounded-[10px] border-[1px] bg-user-side-btn active:bg-user-side-btn-hover">
        <div className="w-full flex justify-center">
          <img className="mt-[30px]" src={Sparkle} alt="" />
        </div>
        <div className="mt-[12px] w-full flex justify-center">
          <p className="font-bold text-[12px] leading-[15px]">{name}</p>
        </div>
      </div>
    </button>
  );
};

export default Button;
