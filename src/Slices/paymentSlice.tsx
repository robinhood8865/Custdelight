import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
  publishableKey: string;
  secretKey: string;
}

const initialState: PaymentState = {
  publishableKey: "",
  secretKey: "",
};

const PaymentSlice = createSlice({
  name: "Payment",
  initialState,
  reducers: {
    setPaymentconfiguration: (state, action: PayloadAction<PaymentState>) =>
      action.payload,

    setPublisableKey: (state, action: PayloadAction<string>) => {
      state.publishableKey = action.payload;
    },
    setSecretKey: (state, action: PayloadAction<string>) => {
      state.secretKey = action.payload;
    },
  },
});

const { reducer, actions } = PaymentSlice;

export const { setPaymentconfiguration, setPublisableKey, setSecretKey } =
  actions;
export default reducer;
