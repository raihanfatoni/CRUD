import {
    GET_USERS_LIST,
    GET_USER_DETAIL,
    GET_CITY_LIST,
    GET_CITY_DETAIL,
    POST_USER_CREATE,
    PUT_USER_EDIT,
  } from "../actions/cityAction";
  
  let initialState = {
    getCityList: false,
    errorCityList: false,
    getCityDetail: false,
    errorCityDetail: false,
    getResponDataCity: false,
    errorResponDataCity: false,
    title: "Vitour Admin Page",
  };
  
  const city = (state = initialState, action) => {
    switch (action.type) {
      case GET_CITY_LIST:
        return {
          ...state,
          getCityList: action.payload.data,
          errorCityList: action.payload.errorMessage,
        };
  
      case GET_CITY_DETAIL:
        return {
          ...state,
          getCityDetail: action.payload.data,
          errorCityDetail: action.payload.errorMessage,
        };
  
      // case POST_USER_CREATE:
      //   return {
      //     ...state,
      //     getResponDataUser: action.payload.data,
      //     errorResponDataUser: action.payload.errorMessage,
      //   };
  
      // case PUT_USER_EDIT:
      //   return {
      //     ...state,
      //     getResponDataUser: action.payload.data,
      //     errorResponDataUser: action.payload.errorMessage,
      //   };
  
      default:
        return state;
    }
  };
  
  export default city;
  