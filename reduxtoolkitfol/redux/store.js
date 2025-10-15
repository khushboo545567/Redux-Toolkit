import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// first create store
// wrap app in provider store
// create slice - reducer - function
// add the slice in the store
