import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
const store = configureStore({
  reducer: {
    pa: reducer,
  },
});

export default store;
