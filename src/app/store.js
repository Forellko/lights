import { configureStore } from '@reduxjs/toolkit';
import directionReducer from '../features/direction/directionSlice';

export const store = configureStore({
  reducer: {
    colors: directionReducer,
  },
});
