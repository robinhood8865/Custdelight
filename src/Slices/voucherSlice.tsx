import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VoucherState {
  voucherType: number;
  expiryTerm: number;
  fees: number;
  voucherFirstName: boolean;
  voucherLastName: boolean;
  voucherEmail: boolean;
  voucherMobileNumber: boolean;
  redemptionType: boolean;
  redemption: number;
  voucherTerms: string;
}

const widget = localStorage.getItem("widget");

const initialState: VoucherState = widget
  ? JSON.parse(widget).module.voucher
  : {
      voucherType: 1,
      expiryTerm: 1,
      fees: 99,
      voucherFirstName: false,
      voucherLastName: false,
      voucherEmail: false,
      voucherMobileNumber: false,
      redemptionType: false,
      redemption: 200,
      voucherTerms: "https://www.xxx.com",
    };

const VoucherSlice = createSlice({
  name: "Voucher",
  initialState,
  reducers: {
    setVoucherConfigration: (state, action: PayloadAction<VoucherState>) =>
      action.payload,
    setVoucherType: (state, action: PayloadAction<number>) => {
      state.voucherType = action.payload;
    },
    setExpiryTerm: (state, action: PayloadAction<number>) => {
      state.expiryTerm = action.payload;
    },
    setFees: (state, action: PayloadAction<number>) => {
      state.fees = action.payload;
    },
    setVoucherFirstName: (state, action: PayloadAction<boolean>) => {
      state.voucherFirstName = action.payload;
    },
    setVoucherLastName: (state, action: PayloadAction<boolean>) => {
      state.voucherLastName = action.payload;
    },
    setVoucherEmail: (state, action: PayloadAction<boolean>) => {
      state.voucherEmail = action.payload;
    },
    setVoucherMobileNumber: (state, action: PayloadAction<boolean>) => {
      state.voucherMobileNumber = action.payload;
    },
    setRedemptionType: (state, action: PayloadAction<boolean>) => {
      state.redemptionType = action.payload;
    },
    setRedemption: (state, action: PayloadAction<number>) => {
      state.redemption = action.payload;
    },
    setVoucherTerms: (state, action: PayloadAction<string>) => {
      state.voucherTerms = action.payload;
    },
  },
});

const { reducer, actions } = VoucherSlice;

export const {
  setVoucherType,
  setExpiryTerm,
  setFees,
  setVoucherFirstName,
  setVoucherLastName,
  setVoucherEmail,
  setVoucherMobileNumber,
  setRedemptionType,
  setRedemption,
  setVoucherTerms,
  setVoucherConfigration,
} = actions;
export default reducer;
