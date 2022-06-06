const VideovrValidation = (values) => {
    const errors = {};
  
    if (!values.city_id || values.city_id === "") {
      errors.city_id = "ID Kota harus diisi";
    }
  
    if (!values.link_video || values.link_video === "") {
      errors.link_video = "Link Video harus diisi";
    }
  
    if (!values.deskripsi || values.deskripsi === "") {
      errors.deskripsi = "Deskripsi Video harus diisi";
    }
  
    if (!values.durasi || values.durasi === "") {
      errors.deskripsi_videovr = "Durasi harus diisi";
    }
  
    return errors
  };
  
  export default VideovrValidation;
  