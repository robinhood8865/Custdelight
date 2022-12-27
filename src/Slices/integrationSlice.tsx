import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntegrationState {
  airtableBaseID: string;
  airtableAPIKey: string;
  airtableState: number;
  publishableKey: string;
  secretKey: string;
}

const widget = localStorage.getItem("widget");
const initialState: IntegrationState = widget
  ? JSON.parse(widget).integration
  : {
      airtableBaseID: "",
      airtableAPIKey: "",
      airtableState: 0,
      publishableKey: "",
      secretKey: "",
    };

const integrationSlice = createSlice({
  name: "Integration",
  initialState,
  reducers: {
    setIntegraconfiguration: (state, action: PayloadAction<IntegrationState>) =>
      action.payload,

    setAirtableBaseID: (state, action: PayloadAction<string>) => {
      state.airtableBaseID = action.payload;
    },
    setAirtableAPIKey: (state, action: PayloadAction<string>) => {
      state.airtableAPIKey = action.payload;
    },
    setAirtableState: (state, action: PayloadAction<number>) => {
      state.airtableState = action.payload;
    },
    setPublisableKey: (state, action: PayloadAction<string>) => {
      state.publishableKey = action.payload;
    },
    setSecretKey: (state, action: PayloadAction<string>) => {
      state.secretKey = action.payload;
    },
  },
});

const { reducer, actions } = integrationSlice;
export const {
  setIntegraconfiguration,
  setAirtableBaseID,
  setAirtableAPIKey,
  setAirtableState,
  setPublisableKey,
  setSecretKey,
} = actions;
export default reducer;
