import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../lib/api";
import { CurrencyType } from "../../lib/types";

const usersSlice = createSlice({
  name: "data",
  initialState: {
    currencies: [] as CurrencyType[],
    loading: false,
    lastUpdate: null as number | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.currencies = action.payload;
      state.loading = false;
      state.lastUpdate = new Date().getTime();
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default usersSlice;
