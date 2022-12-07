import axios from "axios";

export const GET_ORDERS_LIST = "GET_ORDERS_LIST";
export const GET_ORDERS_DETAIL = "GET_ORDERS_DETAIL";
export const POST_ORDERS_CREATE = "POST_ORDERS_CREATE";
export const PUT_ORDERS_EDIT = "PUT_ORDERS_EDIT";



export const getOrdersList = () => {
  return (dispatch) => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL + "/api/order",{
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
      .then(function (response) {
        dispatch({
          type: GET_ORDERS_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
        console.log(response.data.data)
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
        process.env.REACT_APP_BASE_URL + "/api/order/" +id,{
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
      .then(function (response) {
        dispatch({
          type: GET_ORDERS_DETAIL,
          payload: {
            data: {
              order_id : response.data.data[0].order_id,
              user_id : response.data.data[0].user_id,
              total_price: response.data.data[0].total_price,
              status: response.data.data[0].status,
              response_midtrans: JSON.stringify(response.data.data[0].response_midtrans)
            },
            errorMessage: false,
          },
        });
        console.log(response.data.data[0])
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
         process.env.REACT_APP_BASE_URL + "/api/order/"+id,
        data,{
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
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
         process.env.REACT_APP_BASE_URL + "/api/order/"+id,{
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
         })
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
