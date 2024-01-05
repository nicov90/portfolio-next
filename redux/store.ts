import { configureStore } from '@reduxjs/toolkit';
import animationsReducer from './slices/animations';
import themeReducer from './slices/theme';

export const store = configureStore({
  reducer: {
    animations: animationsReducer,
    theme: themeReducer,
  }
})