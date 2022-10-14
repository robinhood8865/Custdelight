import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModuleState {
  visibleMemberShip: boolean;
  visibleVouchers: boolean;
  visiblePayment: boolean;
  moduleIndex: number;
}

const initialState: ModuleState = {
  visibleMemberShip: false,
  visibleVouchers: false,
  visiblePayment: false,
  moduleIndex: 1,
};

const ModuleSlice = createSlice({
  name: "Module",
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

const { reducer, actions } = ModuleSlice;

export const { setMemberShip, setVouchers, setPayment, setModuleIndex } =
  actions;
export default reducer;
