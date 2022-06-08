const CulinaryValidation = (values) => {
    const errors = {};
  
    if (!values.city_id || values.city_id === "") {
      errors.city_id = "ID Kota harus diisi";
    }
  
    if (!values.nama_budaya || values.nama_budaya === "") {
      errors.nama_budaya = "Nama Budaya harus diisi";
    }
  
    if (!values.deskripsi_budaya || values.deskripsi_budaya === "") {
      errors.deskripsi_budaya = "Deskripsi harus diisi";
    }
  
    return errors
  };
  
  export default CulinaryValidation;
  