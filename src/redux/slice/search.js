import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    flag: false,
  },
  reducers: {
    toggle: (state) => {
      state.flag = !state.flag;
    },
  },
});

export const { toggle } = searchSlice.actions;
export default searchSlice.reducer;