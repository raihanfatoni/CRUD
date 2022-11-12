import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import OrdersFormComponent from "../components/OrdersFormComponent";
import { connect } from "react-redux";
import { getOrdersDetail, putOrdersUpdate } from "../actions/ordersAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataOrders: state.orders.getResponDataOrders,
    errorResponDataOrders: state.orders.errorResponDataOrders,
  };
};

class EditOrdersContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getOrdersDetail(this.props.match.params.id));
      }
    
      handleSubmit(data) {
        this.props.dispatch(putOrdersUpdate(data, this.props.match.params.id));
      }

  render() {
    if (this.props.getResponDataOrders || this.props.errorResponDataOrders) {
      if(this.props.errorResponDataOrders)
      {
        swal(
            "Failed!",
            this.props.errorResponDataOrders,
            "error"
          );
      }else {
        swal(
            "Orders Updated!",
            "Success : " +
              this.props.getResponDataOrders,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Orders</h1>
        <OrdersFormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditOrdersContainer);
