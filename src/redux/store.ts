import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "./features/authSlice";
import { authAPI } from "./api/authApi";
import { candidateAPI } from "./api/candidateApi";
import { usersAPI } from "./api/userApi";

export const store = configureStore({
  reducer: {
    authReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [candidateAPI.reducerPath]: candidateAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authAPI.middleware,
      candidateAPI.middleware,
      usersAPI.middleware
    );
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
