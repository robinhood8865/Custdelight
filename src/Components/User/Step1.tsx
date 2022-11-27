import { Button } from "@material-tailwind/react";
import { useAppDispatch } from "../../App/hooks";
import { setAirtableState } from "../../Slices/integrationSlice";

const Step1 = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-[20px] w-[850px] h-[450px] rounded-[10px] bg-[#FCFCFC] border-[#F0F0F0] flex py-[110px] px-[80px] justify-between">
      <div className="w-[280px]">
        <div className="text-[24px] font-bold text-[#333539] text-center">
          Welcome To your membership dashboard
        </div>
        <div className="text-[14px] mt-[11px] font-[400] text-center">
          To enable membership first set up your Airtable base
        </div>
        <div className="mt-[24px] flex justify-center">
          <Button
            onClick={() => {
              dispatch(setAirtableState(1));
            }}
            className="w-[170px] h-[50px] bg-[#812FBF] text-[16px] font-bold normal-case"
          >
            Setup Airtable
          </Button>
        </div>
      </div>
      <div className="w-[350px] ">
        <div>
          Syncing your Custdelight user table with your Airtable base unlocks a
          number of advanced features, including:
        </div>
        <div className="mt-[10px]  flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="check-circle">
                <path
                  id="Glyph"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.4975 4.99521C12.107 4.60468 11.4738 4.60468 11.0833 4.99521L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.4975 6.40942C12.888 6.0189 12.888 5.38573 12.4975 4.99521Z"
                  fill="#30313D"
                />
              </g>
            </svg>
          </div>
          <div className="ml-[22px] text-[14px] font-[400]">
            Additional sign-up blocks fields
          </div>
        </div>
        <div className="mt-[10px]  flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="check-circle">
                <path
                  id="Glyph"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.4975 4.99521C12.107 4.60468 11.4738 4.60468 11.0833 4.99521L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.4975 6.40942C12.888 6.0189 12.888 5.38573 12.4975 4.99521Z"
                  fill="#30313D"
                />
              </g>
            </svg>
          </div>
          <div className="ml-[22px] text-[14px] font-[400]">
            Additional form block fields
          </div>
        </div>
        <div className="mt-[10px]  flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="check-circle">
                <path
                  id="Glyph"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.4975 4.99521C12.107 4.60468 11.4738 4.60468 11.0833 4.99521L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.4975 6.40942C12.888 6.0189 12.888 5.38573 12.4975 4.99521Z"
                  fill="#30313D"
                />
              </g>
            </svg>
          </div>
          <div className="ml-[22px] text-[14px] font-[400]">
            Ability for users to edit their account details
          </div>
        </div>
        <div className="mt-[10px]  flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g id="check-circle">
                <path
                  id="Glyph"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.4975 4.99521C12.107 4.60468 11.4738 4.60468 11.0833 4.99521L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.4975 6.40942C12.888 6.0189 12.888 5.38573 12.4975 4.99521Z"
                  fill="#30313D"
                />
              </g>
            </svg>
          </div>
          <div className="ml-[22px] text-[14px] font-[400]">
            Syncing users with your Airtable base
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
