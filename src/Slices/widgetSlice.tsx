import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WidgetState {
  visibleMemberShip: boolean;
  visibleVouchers: boolean;
  visiblePayment: boolean;
  moduleIndex: number;
}

const initialState: WidgetState = {
  visibleMemberShip: false,
  visibleVouchers: false,
  visiblePayment: false,
  moduleIndex: 1,
};

const WidgetSlice = createSlice({
  name: "Widget",
  initialState,
  reducers: {
    setMemberShip: (state, action: PayloadAction<boolean>) => {
      state.visibleMemberShip = action.payload;
    },
    setVouchers: (state, action: PayloadAction<boolean>) => {
      state.visibleVouchers = action.payload;
    },
    setPayment: (state, action: PayloadAction<boolean>) => {
      state.visiblePayment = action.payload;
    },
    setModuleIndex: (state, action: PayloadAction<number>) => {
      state.moduleIndex = action.payload;
    },
  },
});

const { reducer, actions } = WidgetSlice;

export const { setMemberShip, setVouchers, setPayment, setModuleIndex } =
  actions;
export default reducer;
