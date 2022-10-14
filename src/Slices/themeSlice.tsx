import { color } from "@material-tailwind/react/types/components/alert";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  styleIndex: number;
  headerColor: string;
  buttonColor: string;
  widgetColor: string;
  widgetIcon: any;
}

const initialState: ThemeState = {
  styleIndex: 0,
  headerColor: "#812FBF",
  buttonColor: "#812FBF",
  widgetColor: "#812FBF",
  widgetIcon: "Icon",
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
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
} = actions;
export default reducer;
