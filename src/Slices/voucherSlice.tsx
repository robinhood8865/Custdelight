import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Voucher {
  voucherTitle: string;
  voucherType: number;
  voucherExpiryTerm: number;
  voucherUsualPrice: number;
  voucherDiscountedPrice: number;
  voucherTerms: string;
}
export interface VoucherState {
  vouchers: Voucher[];
  voucherFirstName: boolean;
  voucherLastName: boolean;
  voucherEmail: boolean;
  voucherMobileNumber: boolean;
  redemptionType: boolean;
  redemption: number;
}

const widget = localStorage.getItem("widget");

const initialState: VoucherState =
  // widget
  //   ? JSON.parse(widget).module.voucher
  // :
  {
    vouchers: [
      {
        voucherTitle: "",
        voucherType: 0,
        voucherExpiryTerm: 1,
        voucherUsualPrice: 200,
        voucherDiscountedPrice: 200,
        voucherTerms: "",
      },
    ],
    voucherFirstName: false,
    voucherLastName: false,
    voucherEmail: false,
    voucherMobileNumber: false,
    redemptionType: false,
    redemption: 200,
  };

const VoucherSlice = createSlice({
  name: "Voucher",
  initialState,
  reducers: {
    setVoucherconfiguration: (state, action: PayloadAction<VoucherState>) =>
      action.payload,
    setVoucher: (state, action: PayloadAction<Voucher>) => {
      console.log(state.vouchers.length);
      // state.vouchers[] = action.payload;
    },
    setVoucherType: (state, action: PayloadAction<number>) => {
      state.vouchers[0].voucherType = action.payload;
    },
    setVoucherTitle: (state, action: PayloadAction<string>) => {
      state.vouchers[0].voucherTitle = action.payload;
    },
    setVoucherExpiryTerm: (state, action: PayloadAction<number>) => {
      state.vouchers[0].voucherExpiryTerm = action.payload;
    },
    setvoucherUsualPrice: (state, action: PayloadAction<number>) => {
      state.vouchers[0].voucherUsualPrice = action.payload;
    },
    setvoucherDiscountedPrice: (state, action: PayloadAction<number>) => {
      state.vouchers[0].voucherDiscountedPrice = action.payload;
    },
    setVoucherTerms: (state, action: PayloadAction<string>) => {
      state.vouchers[0].voucherTerms = action.payload;
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
  },
});

const { reducer, actions } = VoucherSlice;

export const {
  setVoucher,
  setVoucherType,
  setVoucherTitle,
  setVoucherExpiryTerm,
  setvoucherDiscountedPrice,
  setvoucherUsualPrice,
  setVoucherTerms,
  setVoucherFirstName,
  setVoucherLastName,
  setVoucherEmail,
  setVoucherMobileNumber,
  setRedemptionType,
  setRedemption,
  setVoucherconfiguration,
} = actions;
export default reducer;
