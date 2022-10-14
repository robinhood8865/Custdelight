import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VoucherState {
  voucherType: number;
  expiryTerm: number;
  fees: number;
  voucherFirstname: boolean;
  voucherLastname: boolean;
  voucherEmail: boolean;
  voucherMobileNumber: boolean;
  redemptionType: boolean;
  redemption: number;
  voucherTerms: string;
}

const initialState: VoucherState = {
  voucherType: 1,
  expiryTerm: 1,
  fees: 99,
  voucherFirstname: false,
  voucherLastname: false,
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
    setVoucherType: (state, action: PayloadAction<number>) => {
      state.voucherType = action.payload;
    },
    setExpiryTerm: (state, action: PayloadAction<number>) => {
      state.expiryTerm = action.payload;
    },
    setFees: (state, action: PayloadAction<number>) => {
      state.fees = action.payload;
    },
    setVoucherFirstname: (state, action: PayloadAction<boolean>) => {
      state.voucherFirstname = action.payload;
    },
    setVoucherLastname: (state, action: PayloadAction<boolean>) => {
      state.voucherLastname = action.payload;
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
  setVoucherFirstname,
  setVoucherLastname,
  setVoucherEmail,
  setVoucherMobileNumber,
  setRedemptionType,
  setRedemption,
  setVoucherTerms,
} = actions;
export default reducer;
