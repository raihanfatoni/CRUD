import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import VideovrFormComponent from "../components/VideovrFormComponent";
import { connect } from "react-redux";
import { getVideovrDetail, putVideovrUpdate } from "../actions/videovrAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataVideovr: state.videovr.getResponDataVideovr,
    errorResponDataVideovr: state.videovr.errorResponDataVideovr,
  };
};

class EditVideovrContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getVideovrDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putVideovrUpdate(data, this.props.match.params.id));
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
            "Videovr Updated!",
            "Success : " +
              this.props.getResponDataVideovr,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Videovr</h1>
        <VideovrFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditVideovrContainer);
