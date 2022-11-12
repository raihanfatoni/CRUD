import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getOrdersDetail } from "../actions/ordersAction";
import DetailOrdersComponent from "../components/DetailOrdersComponent";

class DetailOrdersContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getOrdersDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Orders</h1>
        <DetailOrdersComponent />
      </Container>
    );
  }
}

export default connect()(DetailOrdersContainer);
