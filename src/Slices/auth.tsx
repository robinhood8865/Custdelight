import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import authService from "../Services/auth.service";
import { UserInfo } from "os";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
}

interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface IAuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

const user: IUser = JSON.parse(localStorage.getItem("user") as string);

export const register = createAsyncThunk(
  "auth/register",
  async (data: IRegister, thunkAPI) => {
    const { firstname, lastname, email, password } = data;
    try {
      const response = await authService.register(
        firstname,
        lastname,
        email,
        password
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue({});
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    prop: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const { email, password } = prop;
    try {
      const data = await authService.login(email, password);
      return { user: data };
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue({});
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const initialState: IAuthState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [register.fulfilled.toString()]: (state, action: PayloadAction) => {
      state.isLoggedIn = false;
    },
    [register.rejected.toString()]: (state, action: PayloadAction) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled.toString()]: (
      state,
      action: PayloadAction<{ user: IUser }>
    ) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected.toString()]: (state, action: PayloadAction<IUser>) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled.toString()]: (state, action: PayloadAction<IUser>) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
