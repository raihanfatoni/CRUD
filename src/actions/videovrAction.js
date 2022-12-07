import axios from "axios";
export const GET_VIDEOVR_LIST = "GET_VIDEOVR_LIST";
export const GET_VIDEOVR_DETAIL = "GET_VIDEOVR_DETAIL";
export const POST_VIDEOVR_CREATE = "POST_VIDEOVR_CREATE";
export const PUT_VIDEOVR_EDIT = "PUT_VIDEOVR_EDIT";

export const getVideovrList = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/city/videovrs")
      .then(function (response) {
        dispatch({
          type: GET_VIDEOVR_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response)
      })
      .catch(function (error) {
        dispatch({
          type: GET_VIDEOVR_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getVideovrDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL + "/api/city/videovrs/" +id)
      .then(function (response) {
        dispatch({
          type: GET_VIDEOVR_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_VIDEOVR_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postVideovrCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         process.env.REACT_APP_BASE_URL + "/api/city/videovrs",
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_VIDEOVR_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_VIDEOVR_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putVideovrUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         process.env.REACT_APP_BASE_URL + "/api/city/videovrs/"+id,
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_VIDEOVR_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_VIDEOVR_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteVideovr = (id) => {
  return (dispatch) => {
    axios
      .delete(
         process.env.REACT_APP_BASE_URL + "/api/city/videovrs/"+id, {
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
