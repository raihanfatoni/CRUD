import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import DestinationFormComponent from "../components/DestinationFormComponent";
import { connect } from "react-redux";
import { postDestinationCreate } from "../actions/destinationAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataDestination: state.destination.getResponDataDestination,
    errorResponDataDestination: state.destination.errorResponDataDestination,
  };
};

class CreateDestinationContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postDestinationCreate(data));
  }

  render() {
    if (this.props.getResponDataDestination || this.props.errorResponDataDestination) {
      if(this.props.errorResponDataDestination)
      {
        swal(
            "Failed!",
            this.props.errorResponDataDestination,
            "error"
          );
      }else {
        swal(
            "Destination Created!",
            "ID : " +
              this.props.getResponDataDestination.destination_id +
              " , Nama Destinasi : " +
              this.props.getResponDataDestination.nama_destinasi,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create Destination</h1>
        <DestinationFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateDestinationContainer);
