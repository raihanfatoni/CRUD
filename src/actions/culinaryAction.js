import axios from "axios";

export const GET_CULINARY_LIST = "GET_CULINARY_LIST";
export const GET_CULINARY_DETAIL = "GET_CULINARY_DETAIL";
export const POST_CULINARY_CREATE = "POST_CULINARY_CREATE";
export const PUT_CULINARY_EDIT = "PUT_CULINARY_EDIT";



export const getCulinaryList = () => {
  return (dispatch) => {
    axios
      .get("https://vitour-backend.herokuapp.com/api/city/culinaries")
      .then(function (response) {
        dispatch({
          type: GET_CULINARY_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        // console.log(response.data.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_CULINARY_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getCulinaryDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://vitour-backend.herokuapp.com/api/city/culinaries/" +id)
      .then(function (response) {
        dispatch({
          type: GET_CULINARY_DETAIL,
          payload: {
            data: response.data.data[0],
            errorMessage: false,
          },
        });
        console.log(response.data.data[0])
      })
      .catch(function (error) {
        dispatch({
          type: GET_CULINARY_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postCulinaryCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "https://vitour-backend.herokuapp.com/api/city/culinaries",
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_CULINARY_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_CULINARY_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putCulinaryUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://vitour-backend.herokuapp.com/api/city/culinaries/"+id,
        data, {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_CULINARY_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_CULINARY_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteCulinary = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "https://vitour-backend.herokuapp.com/api/city/culinaries/"+id, {
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
