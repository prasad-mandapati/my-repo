import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counterSlice";
import authSliceReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
