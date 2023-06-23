import { CART_ACTIONS } from "../actions/types";

const initialState = {
  cartItems: [],
  showCartDialog: false,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.ADD_ITEM_IN_CART: {
      let index = state.cartItems.findIndex((x) => x.id === action.payload.id);

      // Is the item user wants to add already in the cart?
      if (index !== -1) {
        // Yes, update the quantity.
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: state.cartItems[index].quantity + action.payload.quantity,
        };

        return { ...state, cartItems: cloneCartItems };
      }

      // No, add a new item.
      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    }

    case CART_ACTIONS.SHOW_CART_DLG:
      return { ...state, showCartDialog: payload };

    case CART_ACTIONS.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };

    case CART_ACTIONS.UPDATE_CART_ITEM_QUANTITY: {
      let index = state.cartItems.findIndex((x) => x.id === action.payload.id);

      // User wants to update quantity of existing item.
      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: action.payload.quantity,
        };

        return { ...state, cartItems: cloneCartItems };
      }

      // If we couldn't find such item, do nothing.
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
