import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  items: [] as OrderItem[],
  item: {} as OrderItem,
  loading: false,
  success: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrder: (state, action: PayloadAction<OrderItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: {},
});

export default orderSlice.reducer;
