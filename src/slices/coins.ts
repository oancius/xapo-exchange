import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../utils/api";
import type { RootState } from "../store";

export interface coinInterface {
  id: string;
  name: string;
  price: number;
}

export interface coinState {
  // Should be array of coins but for now i will use singular naming and implement only one data set.
  data: coinInterface | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: undefined | string;
}
// Initial state
const initialState: coinState = {
  data: null,
  status: "idle",
  error: undefined,
};
// Actual Slice
export const coins = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCoin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.market_data.current_price.usd,
        };
      })
      .addCase(getCoin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // I'll hardcode a random price if the api key runs out of requests or api fails from various reasons, just for demo.
        state.data = {
          id: "bitcoin",
          name: "Bitcoin",
          price: Math.floor(Math.random() * (120000 - 80000 + 1)) + 80000,
        };
      });
  },
});
// Actions

// Thunk Actions
export const getCoin = createAsyncThunk("coins", async (id: string) => {
  return await getApi(`coins/${id}`);
});

// Selectors
export const selectCoin = (state: RootState) => state.coins.data;
export const selectCoinStatus = (state: RootState) => state.coins.status;

export default coins.reducer;
