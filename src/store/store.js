import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../slices/cartSlice";
import brandsReducer from "../slices/brandsSlice";

export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    brands: brandsReducer,
  },
});
