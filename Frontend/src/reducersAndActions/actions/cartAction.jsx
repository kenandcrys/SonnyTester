//Actions.jsx
import { SET_CARTS, REMOVE_ITEM_FROM_CART, UPDATE_CART, ADD_TO_CART } from ".";

export const setCarts = (carts) => ({
    type: SET_CARTS,
    payload: carts,
});

export const addToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = (data) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: data,
});

export const updateCart = (data) => ({
    type: UPDATE_CART,
    payload: data,
});
