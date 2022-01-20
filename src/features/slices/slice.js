import { createSlice } from '@reduxjs/toolkit';

let initColor = window.localStorage.getItem('color');
let initTimer = window.localStorage.getItem('timer');

if (!initColor) {
  initColor = 'green';
}
if (!initTimer) {
  initTimer = 5;
}

const initialState = {
  color: initColor,
  timer: initTimer,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const slice = createSlice({
  name: 'slice',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setGreen: (state) => {
      state.color = 'green';
      state.timer = 5;
    },
    setYellow: (state) => {
      state.color = 'yellow';
      state.timer = 2;
    },
    setRed: (state) => {
      state.color = 'red';
      state.timer = 3;
    },
    decrementTimer: (state) => {
      state.timer -= 1;
    },
  },
});

export const { setGreen, setYellow, setRed, decrementTimer } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectColor = (state) => state.slice.color;
export const selectTimer = (state) => state.slice.timer;

export default slice.reducer;
