const VideovrValidation = (values) => {
    const errors = {};
  
    if (!values.destination_id || values.destination_id === "") {
      errors.destination_id = "ID Kota harus diisi";
    }
  
    if (!values.link_video || values.link_video === "") {
      errors.link_video = "Link Video harus diisi";
    }
  
    if (!values.deskripsi || values.deskripsi === "") {
      errors.deskripsi = "Deskripsi Video harus diisi";
    }
  
    if (!values.durasi || values.durasi === "") {
      errors.durasi = "Durasi harus diisi";
    }
  
    return errors
  };
  
  export default VideovrValidation;
  