import { TYPES } from "../actions/cart.actions";

export const cartInitialState = {
  cart: [],
  total: 0,
  secret: "",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CART_UPDATE_AMOUNT:
      return { ...state, total: state.total + action.payload };

    case TYPES.CART_ADD:
      return { ...state, cart: action.payload };

    case TYPES.CART_REMOVE:
      return { ...state, cart: action.payload };

    case TYPES.CART_GET:
      return { ...state, cart: action.payload };

    case TYPES.CART_PAY:
      return { ...state, secret: action.payload };

    case TYPES.CART_CLEAR:
      return cartInitialState;

    default:
      return state;
  }
};
