const DestinationValidation = (values) => {
    const errors = {};
  
    if (!values.city_id || values.city_id === "") {
      errors.city_id = "ID Kota harus diisi";
    }
  
    if (!values.nama_destinasi || values.nama_destinasi === "") {
      errors.nama_destinasi = "Nama Destinasi harus diisi";
    }
  
    if (!values.tipe_destinasi || values.tipe_destinasi === "") {
      errors.tipe_destinasi = "Tipe Destinasi harus diisi";
    }
  
    if (!values.deskripsi_destinasi || values.deskripsi_destinasi === "") {
      errors.deskripsi_destinasi = "Deskripsi harus diisi";
    }

    if (!values.koordinat_destinasi || values.koordinat_destinasi === "") {
        errors.koordinat_destinasi = "koordinat harus diisi";
    }
  
    return errors
  };
  
  export default DestinationValidation;
  