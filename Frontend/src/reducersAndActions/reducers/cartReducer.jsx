// cartReducer.jsx

import { SET_CARTS } from "../actions";

export const initialState = {
  carts: [],
};

 const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    // add more cases for other actions if needed
    default:
      return state;
  }
};

export default cartReducer