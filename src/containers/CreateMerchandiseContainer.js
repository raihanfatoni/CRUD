import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import MerchandiseFormComponent from "../components/MerchandiseFormComponent";
import { connect } from "react-redux";
import { postMerchandiseCreate } from "../actions/merchandiseAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataMerchandise: state.merchandise.getResponDataMerchandise,
    errorResponDataMerchandise: state.merchandise.errorResponDataMerchandise,
  };
};

class CreateMerchandiseContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postMerchandiseCreate(data));
  }

  render() {
    if (this.props.getResponDataMerchandise || this.props.errorResponDataMerchandise) {
      if(this.props.errorResponDataMerchandise)
      {
        swal(
            "Failed!",
            this.props.errorResponDataMerchandise,
            "error"
          );
      }else {
        swal(
            "Merchandise Created!",
            "ID Kota: " +
              this.props.getResponDataMerchandise.city_id +
              " , Nama : " +
              this.props.getResponDataMerchandise.nama_merchandise,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create Merchandise</h1>
        <MerchandiseFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateMerchandiseContainer);
