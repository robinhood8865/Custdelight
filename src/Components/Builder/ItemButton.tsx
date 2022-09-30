import React from "react";
import Sparkle from "../../../src/Assets/Images/sparkle.svg";
import { Button } from "@material-tailwind/react";

const ItemButton = (props: any) => {
  return (
    <div
      className=""
      onClick={() => {
        props.onCustomClick();
      }}
    >
      <Button
        className={`${
          props.select === 1
            ? "bg-user-side-btn-hover text-white"
            : "bg-user-side-btn text-black"
        } border-user-border w-[100px] h-[100px] rounded-[10px] border-[1px]`}
      >
        <div className="w-full flex justify-center">
          <img className="mt-[30px]" src={Sparkle} alt="sparkle" />
        </div>
        <div className="mt-[12px] w-full flex justify-center">
          <p className="font-bold text-[12px] leading-[15px]">{props.name}</p>
        </div>
      </Button>
    </div>
  );
};

export default ItemButton;
