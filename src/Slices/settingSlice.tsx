import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingState {
  settingIndex: number;
  subDomain: string;
  customerPortal: string;
  logoUrl: string;
  branding: boolean;
  senderName: string;
  senderEmail: string;
}

const widget = localStorage.getItem("widget");

const initialState: SettingState = widget
  ? JSON.parse(widget).setting
  : {
      settingIndex: 0,
      subDomain: "",
      customerPortal: "",
      logoUrl: "logourl",
      branding: false,
      senderName: "",
      senderEmail: "",
    };

const SettingSlice = createSlice({
  name: "Setting",
  initialState,
  reducers: {
    setSettingconfiguration: (state, action: PayloadAction<SettingState>) =>
      action.payload,
    setSettingIndex: (state, action: PayloadAction<number>) => {
      state.settingIndex = action.payload;
    },
    setSubDomain: (state, action: PayloadAction<string>) => {
      state.subDomain = action.payload;
    },
    setCustomerPortal: (state, action: PayloadAction<string>) => {
      state.customerPortal = action.payload;
    },
    setLogoUrl: (state, action: PayloadAction<string>) => {
      state.logoUrl = action.payload;
    },
    setBranding: (state, action: PayloadAction<boolean>) => {
      state.branding = action.payload;
    },
    setSenderName: (state, action: PayloadAction<string>) => {
      state.senderName = action.payload;
    },
    setSenderEmail: (state, action: PayloadAction<string>) => {
      state.senderEmail = action.payload;
    },
  },
});

const { reducer, actions } = SettingSlice;

export const {
  setSettingIndex,
  setSubDomain,
  setCustomerPortal,
  setLogoUrl,
  setBranding,
  setSenderName,
  setSenderEmail,
  setSettingconfiguration,
} = actions;
export default reducer;
