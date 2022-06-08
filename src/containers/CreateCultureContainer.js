import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import CultureFormComponent from "../components/CultureFormComponent";
import { connect } from "react-redux";
import { postCultureCreate } from "../actions/cultureAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataCulture: state.culture.getResponDataCulture,
    errorResponDataCulture: state.culture.errorResponDataCulture,
  };
};

class CreateCultureContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postCultureCreate(data));
  }

  render() {
    if (this.props.getResponDataCulture || this.props.errorResponDataCulture) {
      if(this.props.errorResponDataCulture)
      {
        swal(
            "Failed!",
            this.props.errorResponDataCulture,
            "error"
          );
      }else {
        swal(
            "Culture Created!",
            "ID : " +
              this.props.getResponDataCulture.culture_id +
              " , Nama Budaya : " +
              this.props.getResponDataCulture.nama_budaya,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create Culture</h1>
        <CultureFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateCultureContainer);
