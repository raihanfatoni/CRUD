import {
  GET_DESTINATION_LIST,
  GET_DESTINATION_DETAIL,
  POST_DESTINATION_CREATE,
  PUT_DESTINATION_EDIT

} from "../actions/destinationAction";

let initialState = {
  getDestinationList: false,
  errorDestinationList: false,
  getDestinationDetail: false,
  errorDestinationDetail: false,
  getResponDataDestination: false,
  errorResponDataDestination: false,
  title: "Vitour Admin Page",
};

const destination = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESTINATION_LIST:
      return {
        ...state,
        getDestinationList: action.payload.data,
        errorDestinationList: action.payload.errorMessage,
      };

    case GET_DESTINATION_DETAIL:
      return {
        ...state,
        getDestinationDetail: action.payload.data,
        errorDestinationDetail: action.payload.errorMessage,
      };

    case POST_DESTINATION_CREATE:
      return {
        ...state,
        getResponDataDestination: action.payload.data,
        errorResponDataDestination: action.payload.errorMessage,
      };

    case PUT_DESTINATION_EDIT:
      return {
        ...state,
        getResponDataDestination: action.payload.data,
        errorResponDataDestination: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default destination;
