import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModuleState {
  membershipType: number;
  paymentTerm: string;
  fees: number;
  useFirstname: boolean;
  useLastname: boolean;
  useEmail: boolean;
  useMobileNumber: boolean;
  cancellation: number;
  membershipTerms: string;
}

const initialState: ModuleState = {
  membershipType: 1,
  paymentTerm: "monthly",
  fees: 99.99,
  useFirstname: false,
  useLastname: false,
  useEmail: false,
  useMobileNumber: false,
  cancellation: 1,
  membershipTerms: "https://www.xxx.com",
};

const ModuleSlice = createSlice({
  name: "Module",
  initialState,
  reducers: {
    setMembershipType: (state, action: PayloadAction<number>) => {
      state.membershipType = action.payload;
    },
    setPaymentTerm: (state, action: PayloadAction<string>) => {
      state.paymentTerm = action.payload;
    },
    setFees: (state, action: PayloadAction<number>) => {
      state.fees = action.payload;
    },
    setUseFirstname: (state, action: PayloadAction<boolean>) => {
      state.useFirstname = action.payload;
    },
    setUseLastname: (state, action: PayloadAction<boolean>) => {
      state.useLastname = action.payload;
    },
    setUseEmail: (state, action: PayloadAction<boolean>) => {
      state.useEmail = action.payload;
    },
    setUseMobileNumber: (state, action: PayloadAction<boolean>) => {
      state.useMobileNumber = action.payload;
    },
    setCancellation: (state, action: PayloadAction<number>) => {
      state.cancellation = action.payload;
    },
    setMembershipTerms: (state, action: PayloadAction<string>) => {
      state.membershipTerms = action.payload;
    },
  },
});

const { reducer, actions } = ModuleSlice;

export const {
  setMembershipType,
  setPaymentTerm,
  setFees,
  setUseFirstname,
  setUseLastname,
  setUseEmail,
  setUseMobileNumber,
  setCancellation,
  setMembershipTerms,
} = actions;
export default reducer;
