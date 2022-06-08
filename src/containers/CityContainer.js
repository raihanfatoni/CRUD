import React, { Component } from "react";
import CityComponent from "../components/CityComponent";
import { connect } from "react-redux";
import { getCityList } from '../actions/cityAction'

class CityContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCityList());
  }

  render() {
    return (
      <div>
        <CityComponent />
      </div>
    );
  }
}

export default connect()(CityContainer);
