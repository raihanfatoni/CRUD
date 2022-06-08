import React, { Component } from "react";
import MerchandiseComponent from "../components/MerchandiseComponent";
import { connect } from "react-redux";
import { getMerchandiseList } from '../actions/merchandiseAction'

class MerchandiseContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getMerchandiseList());
  }

  render() {
    return (
      <div>
        <MerchandiseComponent />
      </div>
    );
  }
}

export default connect()(MerchandiseContainer);
