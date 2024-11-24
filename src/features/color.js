import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  initialState: {
    value: "",
  },
  name: "color",
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
