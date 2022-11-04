import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/auth";
import messageReducer from "../Slices/message";
import membershipReducer from "../Slices/membershipSlice";
import voucherReducer from "../Slices/voucherSlice";
import moduleReducer from "../Slices/moduleSlice";
import themeReducer from "../Slices/themeSlice";
import settingReducer from "../Slices/settingSlice";
import paymentReducer from "../Slices/paymentSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  membership: membershipReducer,
  voucher: voucherReducer,
  module: moduleReducer,
  theme: themeReducer,
  setting: settingReducer,
  payment: paymentReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
