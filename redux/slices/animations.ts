import { createSlice } from "@reduxjs/toolkit";

interface errorState {
  startExitAnimation: boolean;
}

const initialState: errorState = {
  startExitAnimation: false,
}

export const animationsReducer = createSlice({
  name: "animations",
  initialState,
  reducers: {
    setStartExitAnimation: (state, action) => {
      state.startExitAnimation = action.payload;
    },
  }
})

export const { setStartExitAnimation } = animationsReducer.actions;
export default animationsReducer.reducer;