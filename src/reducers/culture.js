import {
  GET_CULTURE_LIST,
  GET_CULTURE_DETAIL,
  POST_CULTURE_CREATE,
  PUT_CULTURE_EDIT

} from "../actions/cultureAction";

let initialState = {
  getCultureList: false,
  errorCultureList: false,
  getCultureDetail: false,
  errorCultureDetail: false,
  getResponDataCulture: false,
  errorResponDataCulture: false,
  title: "Vitour Admin Page",
};

const culture = (state = initialState, action) => {
  switch (action.type) {
    case GET_CULTURE_LIST:
      return {
        ...state,
        getCultureList: action.payload.data,
        errorCultureList: action.payload.errorMessage,
      };

    case GET_CULTURE_DETAIL:
      return {
        ...state,
        getCultureDetail: action.payload.data,
        errorCultureDetail: action.payload.errorMessage,
      };

    case POST_CULTURE_CREATE:
      return {
        ...state,
        getResponDataCulture: action.payload.data,
        errorResponDataCulture: action.payload.errorMessage,
      };

    case PUT_CULTURE_EDIT:
      return {
        ...state,
        getResponDataCulture: action.payload.data,
        errorResponDataCulture: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default culture;
