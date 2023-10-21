import { configureStore } from '@reduxjs/toolkit';
import animationsReducer from './slices/animations';

export const store = configureStore({
  reducer: {
    animations: animationsReducer,
  }
})