const OrdersValidation = (values) => {
    const errors = {};
  
    if (!values.user_id || values.user_id === "") {
      errors.user_id = "ID User harus diisi";
    }
  
    if (!values.total_price || values.total_price === "") {
      errors.total_price = "Amount harus diisi";
    }
  
    if (!values.status || values.status === "") {
      errors.status = "Status Pembayaran harus diisi";
    }
  
    return errors
  };
  
  export default OrdersValidation;
  