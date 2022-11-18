import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/CultureBackComponent";
import { connect } from "react-redux";
import { getCultureDetail } from "../actions/cultureAction";
import DetailCultureComponent from "../components/DetailCultureComponent";

class DetailCultureContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCultureDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Culture</h1>
        <DetailCultureComponent />
      </Container>
    );
  }
}

export default connect()(DetailCultureContainer);
