import axios from "axios";

export const LOGIN = "LOGIN";

export const login = (data) => {
  return (dispatch) => {
    axios
      .post(
        process.env.REACT_APP_BASE_URL + "/api/login",
        data
      )
      .then(function (response) {
        console.log(response);
        sessionStorage.setItem('token', response.data.data.token);
        dispatch({
          type: LOGIN,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: LOGIN,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
