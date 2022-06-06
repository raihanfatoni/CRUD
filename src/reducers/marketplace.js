import {
  GET_MARKETPLACE_LIST,
  GET_MARKETPLACE_DETAIL,
  POST_MARKETPLACE_CREATE,
  PUT_MARKETPLACE_EDIT

} from "../actions/marketplaceAction";

let initialState = {
  getMarketplaceList: false,
  errorMarketplaceList: false,
  getMarketplaceDetail: false,
  errorMarketplaceDetail: false,
  getResponDataMarketplace: false,
  errorResponDataMarketplace: false,
  title: "Vitour Admin Page",
};

const marketplace = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKETPLACE_LIST:
      return {
        ...state,
        getMarketplaceList: action.payload.data,
        errorMarketplaceList: action.payload.errorMessage,
      };

    case GET_MARKETPLACE_DETAIL:
      return {
        ...state,
        getMarketplaceDetail: action.payload.data,
        errorMarketplaceDetail: action.payload.errorMessage,
      };

    case POST_MARKETPLACE_CREATE:
      return {
        ...state,
        getResponDataMarketplace: action.payload.data,
        errorResponDataMarketplace: action.payload.errorMessage,
      };

    case PUT_MARKETPLACE_EDIT:
      return {
        ...state,
        getResponDataMarketplace: action.payload.data,
        errorResponDataMarketplace: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default marketplace;
