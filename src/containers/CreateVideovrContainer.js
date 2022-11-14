import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import VideovrFormComponent from "../components/VideovrFormComponent";
import { connect } from "react-redux";
import { postVideovrCreate } from "../actions/videovrAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataVideovr: state.videovr.getResponDataVideovr,
    errorResponDataVideovr: state.videovr.errorResponDataVideovr,
  };
};

class CreateVideovrContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postVideovrCreate(data));
  }

  render() {
    if (this.props.getResponDataVideovr || this.props.errorResponDataVideovr) {
      if(this.props.errorResponDataVideovr)
      {
        swal(
            "Failed!",
            this.props.errorResponDataVideovr,
            "error"
          );
      }else {
        swal(
            "Video VR Created!",
            "ID Destinasi: " +
              this.props.getResponDataVideovr.destination_id +
              " , Durasi : " +
              this.props.getResponDataVideovr.durasi,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create Videovr</h1>
        <VideovrFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateVideovrContainer);
