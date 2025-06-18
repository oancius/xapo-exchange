import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers,
} from "@reduxjs/toolkit";
import coins from "./slices/coins";

const appReducer = combineReducers({
  coins,
});

export const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
