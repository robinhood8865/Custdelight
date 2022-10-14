import { useAppDispatch } from "../../../App/hooks";
import { setSettingIndex } from "../../../Slices/settingSlice";

const SettingsBtn = (props: any) => {
  const dispatch = useAppDispatch();
  const { name, detail } = props;
  return (
    <div
      onClick={() => {
        switch (name) {
          case "General":
            dispatch(setSettingIndex(1));
            break;
          case "Email Signature":
            dispatch(setSettingIndex(2));
            break;
          case "Integration":
            dispatch(setSettingIndex(3));
            break;
          default:
            dispatch(setSettingIndex(0));
            break;
        }
      }}
      className="cursor-pointer h-[50px] w-[274px] flex justify-between items-center mb-[21px]"
    >
      <div className="flex">
        <div className="flex items-center justify-center w-[48px] h-[48px] border-[1px] border-user-border   rounded-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g id="settings">
              <path
                id="Glyph"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.51276 13.4695L6.74076 15.9015C7.15097 15.9663 7.57155 16 8 16C8.42845 16 8.84903 15.9663 9.25924 15.9015L9.48724 13.4695C9.95704 13.342 10.4026 13.1557 10.8155 12.9188L12.6963 14.4772C13.3794 13.981 13.981 13.3794 14.4772 12.6963L12.9188 10.8155C13.1557 10.4026 13.342 9.95704 13.4695 9.48724L15.9015 9.25924C15.9663 8.84903 16 8.42845 16 8C16 7.57155 15.9663 7.15097 15.9015 6.74076L13.4695 6.51276C13.342 6.04296 13.1557 5.5974 12.9188 5.18449L14.4772 3.30372C13.981 2.62058 13.3794 2.01897 12.6963 1.5228L10.8155 3.08116C10.4026 2.84431 9.95704 2.65795 9.48724 2.53051L9.25924 0.0985386C8.84903 0.0336806 8.42845 0 8 0C7.57155 0 7.15097 0.0336806 6.74076 0.0985386L6.51276 2.53051C6.04296 2.65795 5.5974 2.84431 5.18449 3.08116L3.30372 1.5228C2.62058 2.01897 2.01897 2.62058 1.5228 3.30372L3.08116 5.18449C2.84431 5.5974 2.65795 6.04296 2.53051 6.51276L0.0985386 6.74076C0.0336806 7.15097 0 7.57155 0 8C0 8.42845 0.0336806 8.84903 0.0985386 9.25924L2.53051 9.48724C2.65795 9.95704 2.84431 10.4026 3.08116 10.8155L1.5228 12.6963C2.01897 13.3794 2.62058 13.981 3.30372 14.4772L5.18449 12.9188C5.5974 13.1557 6.04296 13.342 6.51276 13.4695ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                fill="#30313D"
              />
            </g>
          </svg>
        </div>
        <div className="ml-[12px]">
          <div className="text-[14px] text-[#5A5A5A] font-bold leadign-[24px] mb-[4px]">
            {name}
          </div>
          <div className="text-[12px] text-[#5A5A5A] font-[400] leadign-[18px]">
            {detail}
          </div>
        </div>
      </div>
      <div className="flex items-center ">
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
              d="M5.29316 2.40864C4.90228 2.01775 4.90228 1.384 5.29316 0.993115C5.68405 0.60223 6.3178 0.60223 6.70869 0.993115L13.0084 7.29284C13.3989 7.68337 13.3989 8.31653 13.0084 8.70706L6.70869 15.0068C6.3178 15.3977 5.68405 15.3977 5.29316 15.0068C4.90228 14.6159 4.90228 13.9822 5.29316 13.5913L10.8845 7.99995L5.29316 2.40864Z"
              fill="#30313D"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SettingsBtn;
