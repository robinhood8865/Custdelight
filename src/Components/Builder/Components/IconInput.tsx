import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { setStyleIndex, setwidgetIcon } from "../../../Slices/themeSlice";
import ApiService from "../../../Services/ApiService";

export const IconPath = (IconName: string = "custdelight.jpg") => {
  const SERVER_URL = process.env.REACT_APP_BACKEND_API;
  return `${SERVER_URL}/uploads/icon/${IconName}`;
};
const IconInput = (props: any) => {
  const { widgetIcon } = useAppSelector((state) => state.theme);
  console.log(
    "🚀 ~ file: IconInput.tsx ~ line 11 ~ IconInput ~ widgetIcon",
    widgetIcon
  );
  const dispatch = useAppDispatch();
  const { name } = props;

  const setSelectState = () => {
    dispatch(setStyleIndex(0));
  };
  const [wIcon, setWIcon] = useState("");
  console.log(wIcon);

  const upload = async (e: any) => {
    console.warn(e.target.files);
    if (e.target.files.length !== 0) {
      setWIcon(URL.createObjectURL(e.target.files[0]));
    }

    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    console.log(
      "🚀 ~ file: IconInput.tsx ~ line 28 ~ upload ~ e.target.files[0]",
      e.target.files[0]
    );
    try {
      const data = await ApiService.uploadIcon(formData);
      console.log("🚀 ~ file: IconInput.tsx ~ line 36 ~ upload ~ data", data);

      const finalIconName = data.data[0].filename;
      dispatch(setwidgetIcon(finalIconName));
      console.log(
        "🚀 ~ file: IconInput.tsx ~ line 38 ~ upload ~ finalImagePath",
        finalIconName
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-[16px] font-bold leading-[20px] mb-[20px]">
        {name}
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-[26px]">
        <input
          type="text"
          disabled
          className="px-3 py-3 relative bg-white rounded-[8px] text-[14px] leading-[21px] font-[400] border-[#EAEAEA] border-[1px] shadow outline-none focus:outline-none focus:ring w-full pr-10 "
        />

        <div className="z-20 cursor-pointer absolute right-[10px] top-[9px] block opacity-0">
          <input
            onClick={() => {}}
            className="z-20 cursor-pointer  h-[40px] w-[30px]"
            type="file"
            onChange={(e) => upload(e)}
            name="img"
          />
        </div>
        <div className="absolute left-4 top-[6px] rounded w-[35px] h-[35px] flex items-center bg-black">
          <img className="rounded" src={IconPath(widgetIcon)} alt="avatar" />
        </div>

        <div className="z-10 h-full  font-normal absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
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
        </div>
      </div>
    </div>
  );
};

export default IconInput;
