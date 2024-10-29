import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export default myntraStore;
