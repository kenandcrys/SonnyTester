import { SET_PRODUCT } from ".";

export const setProductDetails = (data) => ({
    type: SET_PRODUCT,
    payload: data,
});
