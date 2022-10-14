import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingState {
  settingIndex: number;
}

const initialState: SettingState = {
  settingIndex: 0,
};

const SettingSlice = createSlice({
  name: "Setting",
  initialState,
  reducers: {
    setSettingIndex: (state, action: PayloadAction<number>) => {
      state.settingIndex = action.payload;
    },
  },
});

const { reducer, actions } = SettingSlice;

export const { setSettingIndex } = actions;
export default reducer;
