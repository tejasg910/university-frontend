import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isLogin: false,
    userEmail: null,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isLogin = true;
    },
    loginFalse: (state) => {
      state.isLogin = false;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, loginFalse, incrementByAmount, setUserEmail } =
  counterSlice.actions;

export default counterSlice.reducer;
