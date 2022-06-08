import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import MarketplaceFormComponent from "../components/MarketplaceFormComponent";
import { connect } from "react-redux";
import { getMarketplaceDetail, putMarketplaceUpdate } from "../actions/marketplaceAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataMarketplace: state.marketplace.getResponDataMarketplace,
    errorResponDataMarketplace: state.marketplace.errorResponDataMarketplace,
  };
};

class EditMarketplaceContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getMarketplaceDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putMarketplaceUpdate(data, this.props.match.params.id));
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
            "Marketplace Updated!",
            "Success : " +
              this.props.getResponDataMarketplace,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Marketplace</h1>
        <MarketplaceFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditMarketplaceContainer);
