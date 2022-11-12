import axios from "axios";
export const GET_CULTURE_LIST = "GET_CULTURE_LIST";
export const GET_CULTURE_DETAIL = "GET_CULTURE_DETAIL";
export const POST_CULTURE_CREATE = "POST_CULTURE_CREATE";
export const PUT_CULTURE_EDIT = "PUT_CULTURE_EDIT";

export const getCultureList = () => {
  return (dispatch) => {
    axios
      .get("https://vitour-backend.herokuapp.com/api/city/cultures")
      .then(function (response) {
        dispatch({
          type: GET_CULTURE_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        // console.log(response.data.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_CULTURE_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getCultureDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://vitour-backend.herokuapp.com/api/city/cultures/" +id)
      .then(function (response) {
        dispatch({
          type: GET_CULTURE_DETAIL,
          payload: {
            data: response.data.data[0],
            errorMessage: false,
          },
        });
        console.log(response.data.data[0])
      })
      .catch(function (error) {
        dispatch({
          type: GET_CULTURE_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postCultureCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "https://vitour-backend.herokuapp.com/api/city/cultures",
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_CULTURE_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_CULTURE_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putCultureUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://vitour-backend.herokuapp.com/api/city/cultures/"+id,
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_CULTURE_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_CULTURE_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteCulture = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "https://vitour-backend.herokuapp.com/api/city/cultures/"+id, {
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
