const MarketplaceValidation = (values) => {
    const errors = {};
  
    if (!values.whatsapp || values.whatsapp === "") {
      errors.whatsapp = "Whatsapp harus diisi";
    }
  
    if (!values.facebook || values.facebook === "") {
      errors.facebook = "Facebook harus diisi";
    }
  
    if (!values.shopee || values.shopee === "") {
      errors.shopee = "Shopee harus diisi";
    }
  
    if (!values.tokopedia || values.tokopedia === "") {
      errors.tokopedia = "Tokopedia harus diisi";
    }

    if (!values.bukalapak || values.bukalapak === "") {
        errors.bukalapak = "Bukalapak harus diisi";
    }

    if (!values.merchandise_id || values.merchandise_id === "") {
      errors.merchandise_id = "Merch ID harus diisi";
  }
  
    return errors
  };
  
  export default MarketplaceValidation;
  