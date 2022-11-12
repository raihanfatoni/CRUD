import axios from "axios";

export const GET_ORDERS_LIST = "GET_ORDERS_LIST";
export const GET_ORDERS_DETAIL = "GET_ORDERS_DETAIL";
export const POST_ORDERS_CREATE = "POST_ORDERS_CREATE";
export const PUT_ORDERS_EDIT = "PUT_ORDERS_EDIT";



export const getOrdersList = () => {
  return (dispatch) => {
    axios
      .get("https://vitour-backend.herokuapp.com/api/order")
      .then(function (response) {
        dispatch({
          type: GET_ORDERS_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        // console.log(response.data.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_ORDERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getOrdersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://vitour-backend.herokuapp.com/api/order/" +id)
      .then(function (response) {
        dispatch({
          type: GET_ORDERS_DETAIL,
          payload: {
            data: response.data.data[0],
            errorMessage: false,
          },
        });
        console.log(response.data)
      })
      .catch(function (error) {
        dispatch({
          type: GET_ORDERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const putOrdersUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "https://vitour-backend.herokuapp.com/api/order/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_ORDERS_EDIT,
          payload: {
            data: response.data.success,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_ORDERS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteOrders = (id) => {
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
