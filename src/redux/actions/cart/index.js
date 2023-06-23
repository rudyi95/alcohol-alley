import * as TYPES from "./types";

export const addItemInCart = item => ({
  type: TYPES.ADD_ITEM_IN_CART,
  payload: item
});
export const showCartDlg = status => ({
  type: TYPES.SHOW_CART_DLG,
  payload: status
});
export const deleteCartItem = id => ({
  type: TYPES.DELETE_CART_ITEM,
  payload: id
});
export const updateCartItemQnt = obj => ({
  type: TYPES.UPDATE_CART_ITEM_QUANTITY,
  payload: obj
});