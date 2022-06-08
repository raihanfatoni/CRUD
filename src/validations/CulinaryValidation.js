const CulinaryValidation = (values) => {
    const errors = {};
  
    if (!values.city_id || values.city_id === "") {
      errors.city_id = "ID Kota harus diisi";
    }
  
    if (!values.nama_kuliner || values.nama_kuliner === "") {
      errors.nama_kuliner = "Nama Kuliner harus diisi";
    }
  
    if (!values.deskripsi_kuliner || values.deskripsi_kuliner === "") {
      errors.deskripsi_kuliner = "Deskripsi harus diisi";
    }
  
    return errors
  };
  
  export default CulinaryValidation;
  