import { convertHexToDecimal } from "@ctrl/tinycolor";
import { Button, Input } from "@material-tailwind/react";
import { AsyncResource } from "async_hooks";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import airtable from "../../Assets/Images/airtable2.png";
import warning from "../../Assets/Images/warning.svg";
import ApiService from "../../Services/ApiService";

import {
  setAirtableState,
  setAirtableAPIKey,
  setAirtableBaseID,
} from "../../Slices/integrationSlice";

const Step2 = () => {
  const dispatch = useAppDispatch();
  const integration = useAppSelector((state) => state.integration);
  const { airtableAPIKey, airtableBaseID, airtableState } = integration;
  const [apiKey, setApiKey] = useState(airtableAPIKey);
  const [baseId, setBaseId] = useState(airtableBaseID);

  const update = async () => {
    console.log(airtableAPIKey, airtableBaseID, airtableState);
    const data = { airtableAPIKey: apiKey, airtableBaseID: baseId };

    console.log("🚀 ~ file: Step2.tsx:27 ~ update ~ data", data);
    const result = await ApiService.connectBase(data);
    console.log("🚀 ~ file: Step2.tsx:30 ~ update ~ result", result);

    if (result?.data) {
      toast.success("Connect Success");
      dispatch(setAirtableState(2));
      dispatch(setAirtableAPIKey(apiKey));
      dispatch(setAirtableBaseID(baseId));
    } else {
      toast.error("Connection Faild, Incorrect APIKey or BaseId");
      dispatch(setAirtableState(1));
    }

    //keyZo3Y0Rrb662fzT
    //appFgsnjRRLox23zr
  };

  return (
    <div className="mt-[20px] w-[850px] h-[450px] rounded-[10px] bg-[#FCFCFC] border-[#F0F0F0] flex py-[34px] px-[48px] justify-between">
      <div className="w-[352px]">
        <div className="text-[24px] font-bold text-[#333539] text-center">
          Connect your Airtable API key
        </div>
        <div className="text-[14px] mt-[14px] font-[400] ">
          The API Key enables the connection to your Airtable base, this is
          found in your
        </div>
        <div className="text-[14px] mt-[11px] font-[400] mb-[15px] text-[#217EFD] ">
          Airtable Account page.
        </div>
        <Input
          onChange={(e) => {
            setApiKey(e.target.value);
          }}
          value={apiKey}
          className=""
          label="Airtable API Key"
        ></Input>
        <div className="mt-[20px]">
          <Input
            onChange={(e) => {
              setBaseId(e.target.value);
            }}
            value={baseId}
            className=""
            label="Airtable Base Id"
          ></Input>
        </div>
        <div className="w-full h-[48px] flex items-center justify-center bg-[#EDF3FB] mt-[12px]">
          <img src={warning} alt="" />
          <div className="text-[14px] ml-[5px]">Stuck?</div>
          <div className="text-[14px] text-[#4D85D5] ml-[5px]">
            How to find Airtable API Key
          </div>
        </div>
        <div className="mt-[20px] flex justify-center">
          <Button
            onClick={() => {
              update();
            }}
            className="w-full h-[50px] bg-[#812FBF] text-[16px] font-bold normal-case"
          >
            Connect to Airtable
          </Button>
        </div>
      </div>
      <div className="w-[370px]">
        <img src={airtable} alt="" />
      </div>
    </div>
  );
};

export default Step2;
