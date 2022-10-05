import { Switch } from "@material-tailwind/react";
const Airtable = () => {
  return (
    <div className="text-[#5A5A5A] mb-[14px] h-[48px] w-full rounded-[8px] border-[1px] border-user-border pl-[20px] pr-[16px] flex items-center justify-between">
      <div>Open in Airtable</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g id="arrowExport-circle">
            <path
              id="Glyph"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM10 7.42495L5.72007 11.7049C5.32658 12.0984 4.68861 12.0984 4.29512 11.7049C3.90163 11.3114 3.90163 10.6734 4.29512 10.2799L8.57504 6H6C5.44772 6 5 5.55228 5 5C5 4.44772 5.44772 4 6 4H11C11.5523 4 12 4.44772 12 5V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7.42495Z"
              fill="#30313D"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default Airtable;
