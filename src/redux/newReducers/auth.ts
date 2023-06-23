import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "../services/authService";

export const initialState = {
  loading: false,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    /* ------------------ */
    // post login
    /* ------------------ */
    [login.fulfilled.type]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [login.pending.type]: (state) => {
      state.loading = true;
    },
    [login.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
    /* ------------------ */
    // post register
    /* ------------------ */
    [register.fulfilled.type]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [register.pending.type]: (state) => {
      state.loading = true;
    },
    [register.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
});

export default authSlice.reducer;
