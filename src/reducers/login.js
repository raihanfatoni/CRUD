import {
    LOGIN

  } from "../actions/authAction";
  
  let initialState = {
    getResponDataLogin: false,
    errorResponDataLogin: false,
    title: "Vitour Admin Page",
  };
  
  const login = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          getResponDataLogin: action.payload.data,
          errorResponDataLogin: action.payload.errorMessage,
        };
  
    //   case GET_CITY_DETAIL:
    //     return {
    //       ...state,
    //       getCityDetail: action.payload.data,
    //       errorCityDetail: action.payload.errorMessage,
    //     };
  
    //   case POST_CITY_CREATE:
    //     return {
    //       ...state,
    //       getResponDataCity: action.payload.data,
    //       errorResponDataCity: action.payload.errorMessage,
    //     };
  
    //   case PUT_CITY_EDIT:
    //     return {
    //       ...state,
    //       getResponDataCity: action.payload.data,
    //       errorResponDataCity: action.payload.errorMessage,
    //     };
  
      default:
        return state;
    }
  };
  
  export default login;
  