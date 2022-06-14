import React, { Component } from "react";
// import { Container } from "reactstrap";
// import BackComponent from "../components/BackComponent";
import LoginComponent from "../../components/auth/LoginComponent";
// import { connect } from "react-redux";
// import { login } from "../../actions/authAction";
// import swal from "sweetalert";

class LoginContainer extends Component {
  // handleSubmit(data) {
  //   this.props.dispatch(login(data));
  // }

  render() {
    // if (this.props.getResponDataLogin || this.props.errorResponDataLogin) {
    //   if(this.props.errorResponDataLogin)
    //   {
    //     swal(
    //         "Failed!",
    //         this.props.errorResponDataLogin,
    //         "error"
    //       );
    //   }else {
    //     swal(
    //         "Login Berhasil!",
    //         // "Nama: " +
    //         //   this.props.getResponDataCity.nama_kota +
    //         //   " , Koordinat Kota : " +
    //         //   this.props.getResponDataCity.koordinat_kota,
    //         "success"
    //       );
    //   }
    // }
    return (
      <div className="bodyLogin">
        {/* <BackComponent /> */}
        {/* <h1>Create City</h1> */}
        <LoginComponent/>
      </div>
    );
  }
}

export default (LoginContainer);

