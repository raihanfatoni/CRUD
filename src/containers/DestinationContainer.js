import React, { Component } from "react";
import DestinationComponent from "../components/DestinationComponent";
import { connect } from "react-redux";
import { getDestinationList } from '../actions/destinationAction'

class DestinationContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDestinationList());
  }

  render() {
    return (
      <div>
        <DestinationComponent />
      </div>
    );
  }
}

export default connect()(DestinationContainer);
