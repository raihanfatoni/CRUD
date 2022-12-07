import axios from "axios";
export const GET_DESTINATION_LIST = "GET_DESTINATION_LIST";
export const GET_DESTINATION_DETAIL = "GET_DESTINATION_DETAIL";
export const POST_DESTINATION_CREATE = "POST_DESTINATION_CREATE";
export const PUT_DESTINATION_EDIT = "PUT_DESTINATION_EDIT";

export const getDestinationList = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/city/destinations")
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
        process.env.REACT_APP_BASE_URL + "/api/city/destinations/" +id)
      .then(function (response) {
        dispatch({
          type: GET_DESTINATION_DETAIL,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response.data.data)
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
         process.env.REACT_APP_BASE_URL + "/api/city/destinations",
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
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
         process.env.REACT_APP_BASE_URL + "/api/city/destinations/"+id,
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
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
         process.env.REACT_APP_BASE_URL + "/api/city/destinations/"+id, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
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
