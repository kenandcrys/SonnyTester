import * as actionTypes from '.';

export const allOrder = () => ({
  type: actionTypes.ALL_ORDER,
});

export const pendingOrder = () => ({
  type: actionTypes.PENDING_ORDER,
});

export const shippedOrder = () => ({
  type: actionTypes.SHIPPED_ORDER,
});

export const deliveredOrder = () => ({
  type: actionTypes.DELIVERED_ORDER,
});

export const errorOrder = () => ({
  type: actionTypes.ERROR_ORDER,
});
