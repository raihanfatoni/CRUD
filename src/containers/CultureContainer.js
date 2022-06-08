import React, { Component } from "react";
import CultureComponent from "../components/CultureComponent";
import { connect } from "react-redux";
import { getCultureList } from '../actions/cultureAction'

class CultureContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCultureList());
  }

  render() {
    return (
      <div>
        <CultureComponent />
      </div>
    );
  }
}

export default connect()(CultureContainer);
