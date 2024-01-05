import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  darkMode: boolean;
}

const initialState: themeState = {
  darkMode: false,
}

export const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  }
})

export const { setDarkMode } = themeReducer.actions;
export default themeReducer.reducer;