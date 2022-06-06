import {
  GET_VIDEOVR_LIST,
  GET_VIDEOVR_DETAIL,
  POST_VIDEOVR_CREATE,
  PUT_VIDEOVR_EDIT

} from "../actions/videovrAction";

let initialState = {
  getVideovrList: false,
  errorVideovrList: false,
  getVideovrDetail: false,
  errorVideovrDetail: false,
  getResponDataVideovr: false,
  errorResponDataVideovr: false,
  title: "Vitour Admin Page",
};

const videovr = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOVR_LIST:
      return {
        ...state,
        getVideovrList: action.payload.data,
        errorVideovrList: action.payload.errorMessage,
      };

    case GET_VIDEOVR_DETAIL:
      return {
        ...state,
        getVideovrDetail: action.payload.data,
        errorVideovrDetail: action.payload.errorMessage,
      };

    case POST_VIDEOVR_CREATE:
      return {
        ...state,
        getResponDataVideovr: action.payload.data,
        errorResponDataVideovr: action.payload.errorMessage,
      };

    case PUT_VIDEOVR_EDIT:
      return {
        ...state,
        getResponDataVideovr: action.payload.data,
        errorResponDataVideovr: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default videovr;
