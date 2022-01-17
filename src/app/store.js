import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../features/colors/colorSlice';

export const store = configureStore({
  reducer: {
    colors: colorReducer,
  },
});
