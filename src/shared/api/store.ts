import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { loginReducers } from "../model/slice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    loginState: loginReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;