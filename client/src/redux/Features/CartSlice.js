import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  loading: false,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      !state.cartItems
        ? (state.cartItems = [payload])
        : (state.cartItems = [...state.cartItems, payload]);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      state.cartItems = [];
      state.total = 0;
    },

    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((it) => it.id !== payload);
    },

    CartData: (state, { payload }) => {
      state.cartItems = JSON.parse(localStorage.getItem("cart"));
    },

    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.map((it) => {
        total += parseInt(it.price);
      });
      state.total = total;
      localStorage.setItem("total", JSON.stringify(state.total));
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  CartData,
  calculateTotal,
} = CartSlice.actions;

export default CartSlice.reducer;
