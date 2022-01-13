import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  direction: 'down',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const directionSlice = createSlice({
  name: 'direction',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    up: (state) => {
      state.direction = 'up';
    },
    down: (state) => {
      state.direction = 'down';
    },
  },
});

export const { up, down } = directionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDirection = (state) => state.colors.direction;

export default directionSlice.reducer;
