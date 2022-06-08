import axios from "axios";
export const GET_MARKETPLACE_LIST = "GET_MARKETPLACE_LIST";
export const GET_MARKETPLACE_DETAIL = "GET_MARKETPLACE_DETAIL";
export const POST_MARKETPLACE_CREATE = "POST_MARKETPLACE_CREATE";
export const PUT_MARKETPLACE_EDIT = "PUT_MARKETPLACE_EDIT";

export const getMarketplaceList = () => {
  return (dispatch) => {
    axios
      .get("https://vitour-backend.herokuapp.com/api/city/merchandise/marketplace")
      .then(function (response) {
        dispatch({
          type: GET_MARKETPLACE_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response)
      })
      .catch(function (error) {
        dispatch({
          type: GET_MARKETPLACE_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getMarketplaceDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://vitour-backend.herokuapp.com/api/city/merchandise/marketplace/" +id)
      .then(function (response) {
        dispatch({
          type: GET_MARKETPLACE_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response)
      })
      .catch(function (error) {
        dispatch({
          type: GET_MARKETPLACE_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postMarketplaceCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "https://vitour-backend.herokuapp.com/api/city/merchandise/marketplace",
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_MARKETPLACE_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_MARKETPLACE_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putMarketplaceUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://vitour-backend.herokuapp.com/api/city/merchandise/marketplace"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_MARKETPLACE_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_MARKETPLACE_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteMarketplace = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "https://vitour-backend.herokuapp.com/api/city/merchandise/marketplace/"+id
      )
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        
      });
  };
};


// export const deleteDataUser = () => {
//   return (dispatch) => {
//     dispatch({
//       type: GET_USER_DETAIL,
//       payload: {
//         data: false,
//         errorMessage: false,
//       },
//     });


//     dispatch({
//       type: POST_USER_CREATE,
//       payload: {
//         data: false,
//         errorMessage: false,
//       },
//     });
//   };
// };
