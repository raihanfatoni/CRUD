import React, { Component } from "react";
import MarketplaceComponent from "../components/MarketplaceComponent";
import { connect } from "react-redux";
import { getMarketplaceList } from '../actions/marketplaceAction'

class MarketplaceContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getMarketplaceList());
  }

  render() {
    return (
      <div>
        <MarketplaceComponent />
      </div>
    );
  }
}

export default connect()(MarketplaceContainer);
