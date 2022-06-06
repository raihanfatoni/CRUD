import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import CulinaryFormComponent from "../components/CulinaryFormComponent";
import { connect } from "react-redux";
import { postCulinaryCreate } from "../actions/culinaryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataCulinary: state.culinary.getResponDataCulinary,
    errorResponDataCulinary: state.culinary.errorResponDataCulinary,
  };
};

class CreateCulinaryContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postCulinaryCreate(data));
  }

  render() {
    if (this.props.getResponDataCulinary || this.props.errorResponDataCulinary) {
      if(this.props.errorResponDataCulinary)
      {
        swal(
            "Failed!",
            this.props.errorResponDataCulinary,
            "error"
          );
      }else {
        swal(
            "Culinary Created!",
            "ID Kota : " +
              this.props.getResponDataCulinary.city_id +
              " , Nama Kuliner : " +
              this.props.getResponDataCulinary.nama_kuliner,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create Culinary</h1>
        <CulinaryFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateCulinaryContainer);
