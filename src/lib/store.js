import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counters/countersSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export default store;

/**
 * How to set up redux config
 *
 * 1. store configure
 *
 */
