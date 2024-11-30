import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counters/countersSlice";
import todosReducer from "./features/todos/todosSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    todos: todosReducer,
  },
});

export default store;

/**
 * How to set up redux config
 *
 * 1. store configure
 * 2. define reducer slice (counter slice)
 * 3. export store
 *
 */
