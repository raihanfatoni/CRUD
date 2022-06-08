import {
  GET_CULINARY_LIST,
  GET_CULINARY_DETAIL,
  POST_CULINARY_CREATE,
  PUT_CULINARY_EDIT

} from "../actions/culinaryAction";

let initialState = {
  getCulinaryList: false,
  errorCulinaryList: false,
  getCulinaryDetail: false,
  errorCulinaryDetail: false,
  getResponDataCulinary: false,
  errorResponDataCulinary: false,
  title: "Vitour Admin Page",
};

const culinary = (state = initialState, action) => {
  switch (action.type) {
    case GET_CULINARY_LIST:
      return {
        ...state,
        getCulinaryList: action.payload.data,
        errorCulinaryList: action.payload.errorMessage,
      };

    case GET_CULINARY_DETAIL:
      return {
        ...state,
        getCulinaryDetail: action.payload.data,
        errorCulinaryDetail: action.payload.errorMessage,
      };

    case POST_CULINARY_CREATE:
      return {
        ...state,
        getResponDataCulinary: action.payload.data,
        errorResponDataCulinary: action.payload.errorMessage,
      };

    case PUT_CULINARY_EDIT:
      return {
        ...state,
        getResponDataCulinary: action.payload.data,
        errorResponDataCulinary: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default culinary;
