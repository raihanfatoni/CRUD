import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import CultureFormComponent from "../components/CultureFormComponent";
import { connect } from "react-redux";
import { getCultureDetail, putCultureUpdate } from "../actions/cultureAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataCulture: state.culture.getResponDataCulture,
    errorResponDataCulture: state.culture.errorResponDataCulture,
  };
};

class EditCultureContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getCultureDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putCultureUpdate(data, this.props.match.params.id));
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
            "Culture Updated!",
            "Success : " +
              this.props.getResponDataCulture,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Culture</h1>
        <CultureFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditCultureContainer);
