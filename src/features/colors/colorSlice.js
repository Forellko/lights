import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: 'green',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const colorSlice = createSlice({
  name: 'colors',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setGreen: (state) => {
      state.color = 'green';
    },
    setYellow: (state) => {
      state.color = 'yellow';
    },
    setRed: (state) => {
      state.color = 'red';
    },
  },
});

export const { setGreen, setYellow, setRed } = colorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectColor = (state) => state.colors.color;

export default colorSlice.reducer;
