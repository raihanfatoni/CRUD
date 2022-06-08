import axios from "axios";
export const GET_DESTINATION_LIST = "GET_DESTINATION_LIST";
export const GET_DESTINATION_DETAIL = "GET_DESTINATION_DETAIL";
export const POST_DESTINATION_CREATE = "POST_DESTINATION_CREATE";
export const PUT_DESTINATION_EDIT = "PUT_DESTINATION_EDIT";

export const getDestinationList = () => {
  return (dispatch) => {
    axios
      .get("https://vitour-backend.herokuapp.com/api/city/destinations")
      .then(function (response) {
        dispatch({
          type: GET_DESTINATION_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response)
      })
      .catch(function (error) {
        dispatch({
          type: GET_DESTINATION_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDestinationDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://vitour-backend.herokuapp.com/api/city/destinations/" +id)
      .then(function (response) {
        dispatch({
          type: GET_DESTINATION_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response)
      })
      .catch(function (error) {
        dispatch({
          type: GET_DESTINATION_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postDestinationCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "https://vitour-backend.herokuapp.com/api/city/destinations",
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_DESTINATION_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_DESTINATION_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putDestinationUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://vitour-backend.herokuapp.com/api/city/destinations/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_DESTINATION_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_DESTINATION_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteDestination = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "https://vitour-backend.herokuapp.com/api/city/destinations/"+id
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
