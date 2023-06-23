import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "src/api/api";
import { messageSlice } from "../newReducers/message";

export const login = createAsyncThunk(
  "auth/login",
  async (data: RequestDataWithFuncData<LoginRequest, string | null>, thunkApi) => {
    try {
      const res = await api.postLogIn(data.data);
      if (res) {
        localStorage.setItem("token", res.data.token);
      }
      data.func(res?.data.token || null);
      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: RequestDataWithFunc<RegisterRequest>, thunkApi) => {
    try {
      const res = await api.postRegister(data.data);
      data.func();

      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);
