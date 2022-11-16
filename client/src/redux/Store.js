import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Features/CartSlice";
import ItemsSlice from "./Features/ItemsSlice";
const Store = configureStore({
  reducer: {
    ItemsSlice: ItemsSlice,
    CartSlice: CartSlice,
  },
});

export default Store;
