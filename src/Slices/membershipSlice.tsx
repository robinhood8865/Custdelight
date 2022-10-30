import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MembershipState {
  membershipType: number;
  paymentTerm: number;
  fees: number;
  useFirstName: boolean;
  useLastName: boolean;
  useEmail: boolean;
  useMobileNumber: boolean;
  cancellation: number;
  membershipTerms: string;
}

const widget = localStorage.getItem("widget");

const initialState: MembershipState = widget
  ? JSON.parse(widget).module.membership
  : {
      membershipType: 1,
      paymentTerm: 1,
      fees: 99.99,
      useFirstName: false,
      useLastName: false,
      useEmail: false,
      useMobileNumber: false,
      cancellation: 1,
      membershipTerms: "https://www.xxx.com",
    };

const MembershipSlice = createSlice({
  name: "Membership",
  initialState,
  reducers: {
    setMemebershipconfiguration: (
      state,
      action: PayloadAction<MembershipState>
    ) => action.payload,

    setMembershipType: (state, action: PayloadAction<number>) => {
      state.membershipType = action.payload;
    },
    setPaymentTerm: (state, action: PayloadAction<number>) => {
      state.paymentTerm = action.payload;
    },
    setFees: (state, action: PayloadAction<number>) => {
      state.fees = action.payload;
    },
    setUseFirstName: (state, action: PayloadAction<boolean>) => {
      state.useFirstName = action.payload;
    },
    setUseLastName: (state, action: PayloadAction<boolean>) => {
      state.useLastName = action.payload;
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

const { reducer, actions } = MembershipSlice;

export const {
  setMemebershipconfiguration,
  setMembershipType,
  setPaymentTerm,
  setFees,
  setUseFirstName,
  setUseLastName,
  setUseEmail,
  setUseMobileNumber,
  setCancellation,
  setMembershipTerms,
} = actions;
export default reducer;
