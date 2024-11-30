import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value++;
    },

    decrement: (state, action) => {
      const counterIndex = state.findIndex(
        (counter) => counter.id === action.payload
      );
      state[counterIndex].value--;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;

/**
 *
 * --------------------------
 * How to create a slice
 * --------------------------
 * 1. create slice
 * 2. give a name (folder name it is a convention)
 * 3. initials state
 * 4. reducers object
 *      - reducer function like increment: (state, action) => {}
 *      - id will comes in (action.payload)
 *      - check initial state index
 *      - update state
 * 5. export functionName.reducers
 * 6. export const {action} = functionName.actionss
 */
