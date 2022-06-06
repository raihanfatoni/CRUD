import {
  GET_MERCHANDISE_LIST,
  GET_MERCHANDISE_DETAIL,
  POST_MERCHANDISE_CREATE,
  PUT_MERCHANDISE_EDIT

} from "../actions/merchandiseAction";

let initialState = {
  getMerchandiseList: false,
  errorMerchandiseList: false,
  getMerchandiseDetail: false,
  errorMerchandiseDetail: false,
  getResponDataMerchandise: false,
  errorResponDataMerchandise: false,
  title: "Vitour Admin Page",
};

const merchandise = (state = initialState, action) => {
  switch (action.type) {
    case GET_MERCHANDISE_LIST:
      return {
        ...state,
        getMerchandiseList: action.payload.data,
        errorMerchandiseList: action.payload.errorMessage,
      };

    case GET_MERCHANDISE_DETAIL:
      return {
        ...state,
        getMerchandiseDetail: action.payload.data,
        errorMerchandiseDetail: action.payload.errorMessage,
      };

    case POST_MERCHANDISE_CREATE:
      return {
        ...state,
        getResponDataMerchandise: action.payload.data,
        errorResponDataMerchandise: action.payload.errorMessage,
      };

    case PUT_MERCHANDISE_EDIT:
      return {
        ...state,
        getResponDataMerchandise: action.payload.data,
        errorResponDataMerchandise: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default merchandise;
