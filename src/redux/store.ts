import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "./features/authSlice";
import { authAPI } from "./api/authApi";

export const store = configureStore({
  reducer: { authReducer, [authAPI.reducerPath]: authAPI.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authAPI.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
