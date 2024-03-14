import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    video: videoReducer,
    cart: cartReducer,
  },
});
export default appStore;
