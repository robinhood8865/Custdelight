import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";
import ApiService from "../Services/ApiService";

export interface IMembershipState {
  membershipType: number;
  paymentTerm: number;
  fees: number;
  useFirstname: boolean;
  useLastname: boolean;
  useEmail: boolean;
  useMobileNumber: boolean;
  cancellation: number;
  membershipTerms: string;
}

const widget = localStorage.getItem("widget");

const initialState: IMembershipState = widget
  ? JSON.parse(widget).module.membership
  : {
      membershipType: 1,
      paymentTerm: 1,
      fees: 99.99,
      useFirstname: false,
      useLastname: false,
      useEmail: false,
      useMobileNumber: false,
      cancellation: 1,
      membershipTerms: "https://www.xxx.com",
    };

const MembershipSlice = createSlice({
  name: "Membership",
  initialState,
  reducers: {
    setMemebershipConfigration: (
      state,
      action: PayloadAction<IMembershipState>
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

const { reducer, actions } = MembershipSlice;

export const {
  setMemebershipConfigration,
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
