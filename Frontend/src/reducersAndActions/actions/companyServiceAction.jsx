import { SET_CHAR_LONG,SET_INPUT } from ".";

export const setInput = (input) => ({
    type: SET_INPUT,
    payload: input,
  });
  
  export const setCharLong = (isCharLong) => ({
    type: SET_CHAR_LONG,
    payload: isCharLong,
  });
  