import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/DestinationBackComponent";
import { connect } from "react-redux";
import { getDestinationDetail } from "../actions/destinationAction";
import DetailDestinationComponent from "../components/DetailDestinationComponent";

class DetailDestinationContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDestinationDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Destination</h1>
        <DetailDestinationComponent />
      </Container>
    );
  }
}

export default connect()(DetailDestinationContainer);
