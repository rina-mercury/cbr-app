import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: usersReducer.reducer,
  },
});
