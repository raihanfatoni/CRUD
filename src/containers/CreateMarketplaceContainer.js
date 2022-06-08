import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import MarketplaceFormComponent from "../components/MarketplaceFormComponent";
import { connect } from "react-redux";
import { postMarketplaceCreate } from "../actions/marketplaceAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataMarketplace: state.marketplace.getResponDataMarketplace,
    errorResponDataMarketplace: state.marketplace.errorResponDataMarketplace,
  };
};

class CreateMarketplaceContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postMarketplaceCreate(data));
  }

  render() {
    if (this.props.getResponDataMarketplace || this.props.errorResponDataMarketplace) {
      if(this.props.errorResponDataMarketplace)
      {
        swal(
            "Failed!",
            this.props.errorResponDataMarketplace,
            "error"
          );
      }else {
        swal(
            "Marketplace Created!",
            "WA : " +
              this.props.getResponDataMarketplace.whatsapp +
              " , Tokopedia : " +
              this.props.getResponDataMarketplace.tokopedia,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create Marketplace</h1>
        <MarketplaceFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateMarketplaceContainer);
