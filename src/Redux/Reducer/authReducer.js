// Redux/Slice/authReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  role: null,
  user: null,
  isAuthenticated: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authReducer.actions;
export default authReducer.reducer;
