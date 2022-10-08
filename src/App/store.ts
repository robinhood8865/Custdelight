import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/auth";
import messageReducer from "../Slices/message";
import moduleReducer from "../Slices/moduleSlice";
import voucherReducer from "../Slices/voucherSlice";
import widgetReducer from "../Slices/widgetSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  module: moduleReducer,
  voucher: voucherReducer,
  widget: widgetReducer,
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
