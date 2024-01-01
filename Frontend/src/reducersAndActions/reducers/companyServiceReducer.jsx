// companyServiceActions.js

import { SET_CHAR_LONG, SET_INPUT } from "../actions";

const initialState = {
  input: "",
  charLong: false,
};

const companyService = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: action.payload };
    case SET_CHAR_LONG:
      return { ...state, charLong: action.payload };
    default:
      return state;
  }
};

export default companyService;
