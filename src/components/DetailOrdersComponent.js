import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getOrdersDetail: state.orders.getOrdersDetail,
    errorOrdersDetail: state.orders.errorOrdersDetail,
  };
};

const DetailOrdersComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Order ID</td>
          <td width="10">:</td>
          <td>{props.getOrdersDetail.order_id}</td>
        </tr>
        <tr>
          <td width="200">User ID</td>
          <td width="10">:</td>
          <td>{props.getOrdersDetail.user_id}</td>
        </tr>
        <tr>
          <td width="200">Amount</td>
          <td width="10">:</td>
          <td>{props.getOrdersDetail.total_price}</td>
        </tr>
        <tr>
          <td width="200">Status</td>
          <td width="10">:</td>
          <td>{props.getOrdersDetail.status}</td>
        </tr>
        <tr>
          <td width="200">Midtrans Response</td>
          <td width="10">:</td>
          <td>{props.getOrdersDetail.response_midtrans}</td>
        </tr>
    </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailOrdersComponent);
