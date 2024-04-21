import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "PARLOR",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode } = mainSlice.actions
  
export default mainSlice.reducer