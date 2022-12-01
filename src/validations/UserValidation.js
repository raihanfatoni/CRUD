const UserValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.nama = "Nama harus diisi";
  }

  if (!values.role || values.role === "") {
    errors.umur = "Role harus diisi";
  }

  // if (!values.address || values.address === "") {
  //   errors.alamat = "Alamat harus diisi";
  // }

  // if (!values.handphone || values.handphone === "") {
  //   errors.nohp = "No HP harus diisi";
  // }

  return errors
};

export default UserValidation;
