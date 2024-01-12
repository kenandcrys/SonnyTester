// cartReducer.jsx

import { SET_CARTS, REMOVE_ITEM_FROM_CART, ADD_TO_CART, UPDATE_CART } from "../actions";

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
        case ADD_TO_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload],
            };
        case REMOVE_ITEM_FROM_CART:
            state.carts.splice(action.payload, 1);
            return {
                ...state,
                carts: state.carts,
            };

        // add more cases for other actions if needed
        default:
            return state;
    }
};

export default cartReducer