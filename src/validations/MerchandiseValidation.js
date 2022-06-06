const MerchandiseValidation = (values) => {
    const errors = {};
  
    if (!values.city_id || values.city_id === "") {
      errors.city_id = "ID Kota harus diisi";
    }
  
    if (!values.nama_merchandise || values.nama_merchandise === "") {
      errors.nama_merchandise = "Nama Merchandise harus diisi";
    }
  
    if (!values.merchandise_type || values.merchandise_type === "") {
      errors.merchandise_type = "Tipe Merchandise harus diisi";
    }
  
    if (!values.deskripsi_merchandise || values.deskripsi_merchandise === "") {
      errors.deskripsi_merchandise = "Deskripsi harus diisi";
    }

    if (!values.alamat_toko || values.alamat_toko === "") {
        errors.alamat_toko = "Alamat harus diisi";
    }

    if (!values.id_alamat_marketplace || values.id_alamat_marketplace === "") {
        errors.id_alamat_marketplace = "ID Marketplace harus diisi";
    }
  
    return errors
  };
  
  export default MerchandiseValidation;
  