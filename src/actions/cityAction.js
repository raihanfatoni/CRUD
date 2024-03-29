import axios from "axios";

export const GET_CITY_LIST = "GET_CITY_LIST";
export const GET_CITY_DETAIL = "GET_CITY_DETAIL";
export const POST_CITY_CREATE = "POST_CITY_CREATE";
export const PUT_CITY_EDIT = "PUT_CITY_EDIT";



export const getCityList = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/cities")
      .then(function (response) {
        dispatch({
          type: GET_CITY_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        // console.log(response.data.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_CITY_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getCityDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL + "/api/cities/" +id)
      .then(function (response) {
        dispatch({
          type: GET_CITY_DETAIL,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_CITY_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postCityCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         process.env.REACT_APP_BASE_URL + "/api/cities",
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response.data.data);
        
        dispatch({
          type: POST_CITY_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_CITY_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putCityUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         process.env.REACT_APP_BASE_URL + "/api/cities/"+id,
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_CITY_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_CITY_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteCity = (id) => {
  return (dispatch) => {
    axios
      .delete(
         process.env.REACT_APP_BASE_URL + "/api/cities/"+id, {
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
