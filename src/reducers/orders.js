import {
    GET_ORDERS_LIST,
    GET_ORDERS_DETAIL,
    POST_ORDERS_CREATE,
    PUT_ORDERS_EDIT

  } from "../actions/ordersAction";
  
  let initialState = {
    getOrdersList: false,
    errorOrdersList: false,
    getOrdersDetail: false,
    errorOrdersDetail: false,
    getResponDataOrders: false,
    errorResponDataOrders: false,
    title: "Vitour Admin Page",
  };
  
  const orders = (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDERS_LIST:
        return {
          ...state,
          getOrdersList: action.payload.data,
          errorOrdersList: action.payload.errorMessage,
        };
  
      case GET_ORDERS_DETAIL:
        return {
          ...state,
          getOrdersDetail: action.payload.data,
          errorOrdersDetail: action.payload.errorMessage,
        };
  
      case POST_ORDERS_CREATE:
        return {
          ...state,
          getResponDataOrders: action.payload.data,
          errorResponDataOrders: action.payload.errorMessage,
        };
  
      case PUT_ORDERS_EDIT:
        return {
          ...state,
          getResponDataOrders: action.payload.data,
          errorResponDataOrders: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };
  
  export default orders;
  