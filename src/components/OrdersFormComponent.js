import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import OrdersValidation from "../validations/OrdersValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues : {
      user_id : state.orders.getOrdersDetail.user_id,
      total_price : state.orders.getOrdersDetail.total_price,
      status : state.orders.getOrdersDetail.status,
    }
  };
};

class OrdersFormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="user_id"
                component={renderField}
                label="User ID :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="total_price"
                component={renderField}
                label="Amount :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="status"
                component={renderField}
                label="Status :"
              />
            </FormGroup>
          </Col>

        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

OrdersFormComponent = reduxForm({
  form: "formCreateOrders",
  validate: OrdersValidation,
  enableReinitialize: true,
})(OrdersFormComponent);
export default connect(mapStateToProps, null)(OrdersFormComponent);
