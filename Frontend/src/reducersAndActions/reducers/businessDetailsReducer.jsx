import { SET_BUSINESS_DETAILS } from "../actions";

const initialState = {
    businessDetails: [],
    isVerified: false,
  };
  
 const businessDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_BUSINESS_DETAILS:
        return {
          ...state,
          isVerified: true,
          businessDetails: action.payload,
        };
      default:
        return state;
    }
  };
 
  export default businessDetailsReducer;