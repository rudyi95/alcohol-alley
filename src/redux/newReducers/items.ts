import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getItemsAll, getPopularAll, getItemById, editItem, getItemsByCategory } from "../services/itemsService";

export const initialState = {
  items: {
    data: [],
    totalCount: 0,
  } as ArrayResponse<Item>,
  itemsPopular: {
    data: [],
    totalCount: 0,
  } as ArrayResponse<Item>,
  item: {} as Item,
  loading: false,
  success: false,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    resetItem: (state) => {
      state.item = initialState.item;
    },
    resetState: (state) => {
      state.items = initialState.items;
    }
  },
  extraReducers: {
    /* ------------------ */
    // get all items
    /* ------------------ */
    [getItemsAll.fulfilled.type]: (state, action: PayloadAction<ArrayResponse<Item>>) => {
      state.loading = false;
      state.items = action.payload;
      state.success = true;
    },
    [getItemsAll.pending.type]: (state) => {
      state.loading = true;
    },
    [getItemsAll.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
    /* ------------------ */
    // get items by category
    /* ------------------ */
    [getItemsByCategory.fulfilled.type]: (state, action: PayloadAction<ArrayResponse<Item>>) => {
      state.loading = false;
      state.items = action.payload;
      state.success = true;
    },
    [getItemsByCategory.pending.type]: (state) => {
      state.loading = true;
    },
    [getItemsByCategory.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
    /* ------------------ */
    // get all popular items
    /* ------------------ */
    [getPopularAll.fulfilled.type]: (state, action: PayloadAction<ArrayResponse<Item>>) => {
      state.loading = false;
      state.itemsPopular = action.payload;
      state.success = true;
    },
    [getPopularAll.pending.type]: (state) => {
      state.loading = true;
    },
    [getPopularAll.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
    /* ------------------ */
    // get item by id
    /* ------------------ */
    [getItemById.fulfilled.type]: (state, action: PayloadAction<Item>) => {
      state.loading = false;
      state.item = action.payload;
      state.success = true;
    },
    [getItemById.pending.type]: (state) => {
      state.loading = true;
    },
    [getItemById.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
    /* ------------------ */
    // edit item by id
    /* ------------------ */
    [editItem.fulfilled.type]: (state, action: PayloadAction<Item>) => {
      state.loading = false;
      state.success = true;
    },
    [editItem.pending.type]: (state) => {
      state.loading = true;
    },
    [editItem.rejected.type]: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
});

export default itemsSlice.reducer;
