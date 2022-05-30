import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import CityFormComponent from "../components/CityFormComponent";
import { connect } from "react-redux";
import { postCityCreate } from "../actions/cityAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataCity: state.city.getResponDataCity,
    errorResponDataCity: state.city.errorResponDataCity,
  };
};

class CreateCityContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postCityCreate(data));
  }

  render() {
    if (this.props.getResponDataCity || this.props.errorResponDataCity) {
      if(this.props.errorResponDataCity)
      {
        swal(
            "Failed!",
            this.props.errorResponDataCity,
            "error"
          );
      }else {
        swal(
            "City Created!",
            "Nama Kota : " +
              this.props.getResponDataCity.nama_kota +
              " , Koordinat Kota : " +
              this.props.getResponDataCity.koordinat_kota,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create City</h1>
        <CityFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateCityContainer);
