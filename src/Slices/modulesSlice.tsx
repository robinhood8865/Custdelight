import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModulesState {
  visibleMemberShip: boolean;
  visibleVouchers: boolean;
  visiblePayment: boolean;
  moduleIndex: number;
}

const initialState: ModulesState = {
  visibleMemberShip: false,
  visibleVouchers: false,
  visiblePayment: false,
  moduleIndex: 1,
};

const ModulesSlice = createSlice({
  name: "Modules",
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

const { reducer, actions } = ModulesSlice;

export const { setMemberShip, setVouchers, setPayment } = actions;
export default reducer;
