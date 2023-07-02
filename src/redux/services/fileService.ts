import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "src/api/api";

export const upload = createAsyncThunk(
  "file/upload",
  async (data: RequestDataWithFuncData<UploadFile, any>, thunkApi) => {
    const formData = data.data.formData;
    try {
      const res = await api.postImage(formData);
      if (data.func && res) {
        data.func(res);
      }

      return { data: res };
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
