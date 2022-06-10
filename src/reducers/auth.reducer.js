import { TYPES } from "../actions/auth.actions";

export const authInitialState = {
  success: false,
  user: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGGED_IN:
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        success: false,
        user: null,
      };

    default:
      return state;
  }
};
