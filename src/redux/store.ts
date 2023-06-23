import { configureStore, combineReducers } from "@reduxjs/toolkit";

import auth from "src/redux/newReducers/auth";
import items from "src/redux/newReducers/items";
import message from "src/redux/newReducers/message";
import order from "src/redux/newReducers/order";

const rootReducer = combineReducers({
  auth,
  items,
  message,
  order,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
