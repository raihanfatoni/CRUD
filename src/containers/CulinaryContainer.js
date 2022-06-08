import React, { Component } from "react";
import CulinaryComponent from "../components/CulinaryComponent";
import { connect } from "react-redux";
import { getCulinaryList } from '../actions/culinaryAction'

class CulinaryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCulinaryList());
  }

  render() {
    return (
      <div>
        <CulinaryComponent />
      </div>
    );
  }
}

export default connect()(CulinaryContainer);
