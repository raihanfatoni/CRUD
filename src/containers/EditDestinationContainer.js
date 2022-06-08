import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import DestinationFormComponent from "../components/DestinationFormComponent";
import { connect } from "react-redux";
import { getDestinationDetail, putDestinationUpdate } from "../actions/destinationAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataDestination: state.destination.getResponDataDestination,
    errorResponDataDestination: state.destination.errorResponDataDestination,
  };
};

class EditDestinationContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getDestinationDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putDestinationUpdate(data, this.props.match.params.id));
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
            "Destination Updated!",
            "Success : " +
              this.props.getResponDataDestination,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Destination</h1>
        <DestinationFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditDestinationContainer);
