import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/reducer";
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
