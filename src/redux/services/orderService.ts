import { AppDispatch } from "../store";

import { findIndex } from "lodash";
import { produce } from "immer";
import { orderSlice } from "../newReducers/order";

export const addToOrder = (items: OrderItem[], item: OrderItem) => (dispatch: AppDispatch) => {
  const isItem = items.find((i) => i._id === item._id);

  if (!!isItem) {
    const findInd = findIndex(items, { _id: item._id });
    const res = produce(items, (item) => {
      item[findInd].quantity = item[findInd].quantity + 1;
    });
    dispatch(orderSlice.actions.updateOrder(res));
  } else {
    dispatch(orderSlice.actions.updateOrder([...items, item]));
  }
};
