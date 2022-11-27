import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IntegrationState {
  airtableBaseID: string;
  airtableAPIKey: string;
  airtableState: number;
}

const widget = localStorage.getItem("widget");
const initialState: IntegrationState = widget
  ? JSON.parse(widget).airtable
  : { airtableBaseID: "", airtableAPIKey: "", airtableState: 0 };

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
  },
});

const { reducer, actions } = integrationSlice;
export const {
  setIntegraconfiguration,
  setAirtableBaseID,
  setAirtableAPIKey,
  setAirtableState,
} = actions;
export default reducer;
