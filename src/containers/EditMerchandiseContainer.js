import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import MerchandiseFormComponent from "../components/MerchandiseFormComponent";
import { connect } from "react-redux";
import { getMerchandiseDetail, putMerchandiseUpdate } from "../actions/merchandiseAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataMerchandise: state.merchandise.getResponDataMerchandise,
    errorResponDataMerchandise: state.merchandise.errorResponDataMerchandise,
  };
};

class EditMerchandiseContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getMerchandiseDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putMerchandiseUpdate(data, this.props.match.params.id));
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
            "Merchandise Updated!",
            "Success : " +
              this.props.getResponDataMerchandise,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Merchandise</h1>
        <MerchandiseFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditMerchandiseContainer);
