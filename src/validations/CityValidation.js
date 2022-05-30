const CityValidation = (values) => {
    const errors = {};
  
    if (!values.nama_kota || values.nama_kota === "") {
      errors.nama_kota = "Nama Kota harus diisi";
    }
  
    if (!values.informasi_kota || values.informasi_kota === "") {
      errors.informasi_kota = "Deskripsi harus diisi";
    }
  
    if (!values.koordinat_kota || values.koordinat_kota === "") {
      errors.koordinat_kota = "Koordinat harus diisi";
    }
  
    if (!values.email_dinas_pariwisata_kota || values.email_dinas_pariwisata_kota === "") {
      errors.email_dinas_pariwisata_kota = "Email harus diisi";
    }
  
    return errors
  };
  
  export default CityValidation;
  