import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/MarketplaceBackComponent";
import { connect } from "react-redux";
import { getMarketplaceDetail } from "../actions/marketplaceAction";
import DetailMarketplaceComponent from "../components/DetailMarketplaceComponent";

class DetailMarketplaceContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getMarketplaceDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Marketplace</h1>
        <DetailMarketplaceComponent />
      </Container>
    );
  }
}

export default connect()(DetailMarketplaceContainer);
