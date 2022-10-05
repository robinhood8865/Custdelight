import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  openPalete: boolean;
  headerColor: string;
  buttonColor: string;
  widgetColor: string;
  widgetIcon: any;
}

const initialState: ThemeState = {
  openPalete: false,
  headerColor: "#812FBF",
  buttonColor: "#812FBF",
  widgetColor: "#812FBF",
  widgetIcon: "Icon",
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setOpenPalete: (state, action: PayloadAction<boolean>) => {
      state.openPalete = action.payload;
    },
    setHeaderColor: (state, action: PayloadAction<string>) => {
      state.headerColor = action.payload;
    },
  },
});

const { reducer, actions } = ThemeSlice;

export const { setOpenPalete, setHeaderColor } = actions;
export default reducer;
