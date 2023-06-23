import * as TYPES from "./types";

const setCheckedOutItemsHandler = (items) => ({
  type: TYPES.SET_CHECKEDOUT_ITEMS,
  payload: items,
});

const setCheckedOutItems = (data) => {
  return (dispatch) => dispatch(setCheckedOutItemsHandler(data));
};

export { setCheckedOutItems };
