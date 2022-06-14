const LoginValidation = (values) => {
    const errors = {};
  
    if (!values.email || values.email === "") {
      errors.email = "Email harus diisi";
    }
  
    if (!values.password || values.password === "") {
      errors.password = "Password harus diisi";
    }
  
    return errors
  };
  
  export default LoginValidation;
  