import { useRef, useState } from "react";

const ColorInput = (props: any) => {
  const [visible, setVisible] = useState(false);
  const { name } = props;

  return (
    <div>
      <div className="text-[16px] font-bold leading-[20px] mb-[20px]">
        {name}
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-[26px]">
        <input
          type="text"
          disabled={!visible}
          className="px-3 py-3 relative bg-white rounded-[8px] text-[14px] leading-[21px] font-[400] border-[#EAEAEA] border-[1px] shadow outline-none focus:outline-none focus:ring w-full pr-10 "
        />
        <span className="z-10 h-full  font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          <div className="cursor-pointer w-full h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="edit">
                <path
                  id="Glyph"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1936 4.27934L11.7207 0.806445L11.8078 0.71926C12.7669 -0.239753 14.3217 -0.239753 15.2807 0.71926C16.2398 1.67827 16.2398 3.23314 15.2807 4.19216L15.1936 4.27934ZM13.7793 5.69355L4.51476 14.9581L0 16L1.04187 11.4852L10.3064 2.22066L13.7793 5.69355Z"
                  fill="#30313D"
                />
              </g>
            </svg>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ColorInput;
