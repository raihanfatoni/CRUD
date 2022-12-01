import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getCulinaryDetail } from "../actions/culinaryAction";
import DetailCulinaryComponent from "../components/DetailCulinaryComponent";

class DetailCulinaryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCulinaryDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Culinary</h1>
        <DetailCulinaryComponent />
      </Container>
    );
  }
}

export default connect()(DetailCulinaryContainer);
