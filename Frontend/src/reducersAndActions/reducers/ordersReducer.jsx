import * as actionTypes from '../actions';

const initialState = {
  orders: [
    // ... your initial orders array
  ],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(
          (order) =>
            order.status === 'Pending' ||
            order.status === 'Shipped' ||
            order.status === 'Delivered' ||
            order.status === 'Errors'
        ),
      };

    case actionTypes.PENDING_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Pending'),
      };

    case actionTypes.SHIPPED_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Shipped'),
      };

    case actionTypes.DELIVERED_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Delivered'),
      };

    case actionTypes.ERROR_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.status === 'Errors'),
      };

    default:
      return state;
  }
};

export default ordersReducer;
