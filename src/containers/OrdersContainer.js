import React, { Component } from "react";
import OrdersComponent from "../components/OrdersComponent";
import { connect } from "react-redux";
import { getOrdersList } from '../actions/ordersAction'

class OrdersContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getOrdersList());
  }

  render() {
    return (
      <div>
        <OrdersComponent />
      </div>
    );
  }
}

export default connect()(OrdersContainer);
