import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import CityFormComponent from "../components/CityFormComponent";
import { connect } from "react-redux";
import { getCityDetail, putCityUpdate } from "../actions/cityAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataCity: state.city.getResponDataCity,
    errorResponDataCity: state.city.errorResponDataCity,
  };
};

class EditCityContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getCityDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putCityUpdate(data, this.props.match.params.id));
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
            "City Updated!",
            "Success : " +
              this.props.getResponDataCity,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit City</h1>
        <CityFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditCityContainer);
