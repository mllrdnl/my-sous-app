import { configureStore } from "@reduxjs/toolkit";

import ingSearchReducer from "./ingSearchSlice";

export const store = configureStore({
  reducer: {
    search: ingSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
