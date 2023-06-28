import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "PayPal",
      count: 0,
      price: 125,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },

    editCart: (state, action) => {
      const { id, updatedItem } = action.payload;
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem._id === id ? updatedItem : cartItem
      );
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );
    },

    increaseCart: (state) => {
      state.count += 1;
    },
    decreaseCart: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  editCart,
  removeFromCart,
  increaseCart,
  decreaseCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
