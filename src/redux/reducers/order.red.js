import { ORDER_ACTIONS } from "../actions/types";

const initialState = {
  checkedOutItems: [],
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTIONS.SET_CHECKEDOUT_ITEMS: {
      return { ...state, checkedOutItems: payload };
    }

    default:
      return state;
  }
};

export default orderReducer;
