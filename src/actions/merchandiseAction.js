import axios from "axios";
export const GET_MERCHANDISE_LIST = "GET_MERCHANDISE_LIST";
export const GET_MERCHANDISE_DETAIL = "GET_MERCHANDISE_DETAIL";
export const POST_MERCHANDISE_CREATE = "POST_MERCHANDISE_CREATE";
export const PUT_MERCHANDISE_EDIT = "PUT_MERCHANDISE_EDIT";

export const getMerchandiseList = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/city/merchandises")
      .then(function (response) {
        dispatch({
          type: GET_MERCHANDISE_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response)
      })
      .catch(function (error) {
        dispatch({
          type: GET_MERCHANDISE_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getMerchandiseDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL + "/api/city/merchandises/" +id)
      .then(function (response) {
        dispatch({
          type: GET_MERCHANDISE_DETAIL,
          payload: {
            data: response.data.data[0],
            errorMessage: false,
          },
        });
        console.log(response.data.data[0])
      })
      .catch(function (error) {
        dispatch({
          type: GET_MERCHANDISE_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postMerchandiseCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         process.env.REACT_APP_BASE_URL + "/api/city/merchandises/", 
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_MERCHANDISE_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_MERCHANDISE_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putMerchandiseUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         process.env.REACT_APP_BASE_URL + "/api/city/merchandises/"+id,
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_MERCHANDISE_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_MERCHANDISE_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteMerchandise = (id) => {
  return (dispatch) => {
    axios
      .delete(
         process.env.REACT_APP_BASE_URL + "/api/city/merchandises/"+id, {
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
