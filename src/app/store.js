import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from '../features/slices/slice';

export const store = configureStore({
  reducer: {
    slice: sliceReducer,
  },
});
