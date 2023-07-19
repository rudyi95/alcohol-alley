import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "src/api/api";
import { messageSlice } from "../newReducers/message";

export const getItemsAll = createAsyncThunk("items/getAll", async (data: QueriesData, thunkApi) => {
  try {
    const res = await api.getItemsAll({ ...data, page: data.page || 1, limit: data.limit || 10 });

    return res?.data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
    );
  }
});

export const getPopularAll = createAsyncThunk(
  "items/getPopularAll",
  async (data: QueriesData, thunkApi) => {
    try {
      const res = await api.getItemsPopularAll({
        ...data,
        page: data.page || 1,
        limit: data.limit || 10,
      });

      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);

export const getItemById = createAsyncThunk("items/getItemById", async (id: string, thunkApi) => {
  try {
    const res = await api.getItemById(id);

    return res?.data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
    );
  }
});

export const getItemsByCategory = createAsyncThunk(
  "items/getItemsByCategory",
  async (category: string, thunkApi) => {
    try {
      const res = await api.getItemsByCategory(category);

      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);

export const postItem = createAsyncThunk(
  "items/postItem",
  async (data: RequestDataWithFunc<ItemRequest>, thunkApi) => {
    try {
      const res = await api.postItem(data.data);

      data.func();

      thunkApi.dispatch(messageSlice.actions.setSuccess(`${data.data.name} successfully added`));
      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);

export const deleteItem = createAsyncThunk(
  "items/delete",
  async (data: RequestDataWithFunc<string>, thunkApi) => {
    try {
      const res = await api.deleteItem(data.data);

      data.func();

      thunkApi.dispatch(messageSlice.actions.setSuccess("Successfully deleted"));
      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);

export const editItem = createAsyncThunk(
  "items/edit",
  async (data: RequestDataWithFunc<Item>, thunkApi) => {
    try {
      const res = await api.editItem(data.data);

      data.func();

      return res?.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
      );
    }
  }
);
