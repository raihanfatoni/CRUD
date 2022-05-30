import axios from "axios";

export const GET_CITY_LIST = "GET_CITY_LIST";
export const GET_CITY_DETAIL = "GET_CITY_DETAIL";
export const POST_CITY_CREATE = "POST_CITY_CREATE";
export const PUT_CITY_EDIT = "PUT_CITY_EDIT";



export const getCityList = () => {
  return (dispatch) => {
    axios
      .get("https://vitour-backend.herokuapp.com/api/cities")
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
        "https://vitour-backend.herokuapp.com/api/cities/" +id)
      .then(function (response) {
        dispatch({
          type: GET_CITY_DETAIL,
          payload: {
            data: response.data.data[0],
            errorMessage: false,
          },
        });
        console.log(response.data.data[0])
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
         "https://vitour-backend.herokuapp.com/api/cities",
        data
      )
      .then(function (response) {
        console.log(response);
        
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
         "https://vitour-backend.herokuapp.com/api/cities/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_CITY_EDIT,
          payload: {
            data: response.data.data,
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
         "https://vitour-backend.herokuapp.com/api/cities/"+id
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
