import { combineReducers } from "redux";
import orderReducer from "./order.red";
import cartReducer from "./cart.red";

const rootReducer = combineReducers({
  order: orderReducer,
  cart: cartReducer,
});

export default rootReducer;
