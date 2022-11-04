import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  styleIndex: number;
  headerColor: string;
  buttonColor: string;
  widgetColor: string;
  widgetIcon: string;
}

const widget = localStorage.getItem("widget");

const initialState: ThemeState = widget
  ? JSON.parse(widget).theme
  : {
      styleIndex: 0,
      headerColor: "#812FBF",
      buttonColor: "#812FBF",
      widgetColor: "#812FBF",
      widgetIcon: "custdelight.jpg",
    };

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setThemeconfiguration: (state, action: PayloadAction<ThemeState>) =>
      action.payload,
    setStyleIndex: (state, action: PayloadAction<number>) => {
      state.styleIndex = action.payload;
    },
    setHeaderColor: (state, action: PayloadAction<string>) => {
      state.headerColor = action.payload;
    },
    setButtonColor: (state, action: PayloadAction<string>) => {
      state.buttonColor = action.payload;
    },
    setWidgetColor: (state, action: PayloadAction<string>) => {
      state.widgetColor = action.payload;
    },
    setwidgetIcon: (state, action: PayloadAction<string>) => {
      state.widgetIcon = action.payload;
    },
  },
});

const { reducer, actions } = ThemeSlice;

export const {
  setStyleIndex,
  setHeaderColor,
  setButtonColor,
  setWidgetColor,
  setwidgetIcon,
  setThemeconfiguration,
} = actions;
export default reducer;
