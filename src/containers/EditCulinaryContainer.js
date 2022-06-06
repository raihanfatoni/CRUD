import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import CulinaryFormComponent from "../components/CulinaryFormComponent";
import { connect } from "react-redux";
import { getCulinaryDetail, putCulinaryUpdate } from "../actions/culinaryAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataCulinary: state.culinary.getResponDataCulinary,
    errorResponDataCulinary: state.culinary.errorResponDataCulinary,
  };
};

class EditCulinaryContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getCulinaryDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putCulinaryUpdate(data, this.props.match.params.id));
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
            "Culinary Updated!",
            "Success : " +
              this.props.getResponDataCulinary,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Culinary</h1>
        <CulinaryFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditCulinaryContainer);
