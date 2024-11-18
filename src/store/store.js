import { configureStore } from "@reduxjs/toolkit";
import prodReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    product: prodReducer,
  },
});

export default store;
