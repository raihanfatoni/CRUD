import {
    GET_CITY_LIST,
    GET_CITY_DETAIL,
    POST_CITY_CREATE,
    PUT_CITY_EDIT

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
  
      case POST_CITY_CREATE:
        return {
          ...state,
          getResponDataCity: action.payload.data,
          errorResponDataCity: action.payload.errorMessage,
        };
  
      case PUT_CITY_EDIT:
        return {
          ...state,
          getResponDataCity: action.payload.data,
          errorResponDataCity: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };
  
  export default city;
  