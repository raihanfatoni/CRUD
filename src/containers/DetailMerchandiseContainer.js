import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/MerchandiseBackComponent";
import { connect } from "react-redux";
import { getMerchandiseDetail } from "../actions/merchandiseAction";
import DetailMerchandiseComponent from "../components/DetailMerchandiseComponent";

class DetailMerchandiseContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getMerchandiseDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Merchandise</h1>
        <DetailMerchandiseComponent />
      </Container>
    );
  }
}

export default connect()(DetailMerchandiseContainer);
