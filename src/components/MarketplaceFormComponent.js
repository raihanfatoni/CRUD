import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import MarketplaceValidation from "../validations/MarketplaceValidation";

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
      whatsapp : state.marketplace.getMarketplaceDetail.whatsapp,
      facebook : state.marketplace.getMarketplaceDetail.facebook,
      shopee : state.marketplace.getMarketplaceDetail.shopee,
      tokopedia : state.marketplace.getMarketplaceDetail.tokopedia,
      bukalapak : state.marketplace.getMarketplaceDetail.bukalapak,
    }
  };
};

class MarketplaceFormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="whatsapp"
                component={renderField}
                label="Whatsapp :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="facebook"
                component={renderField}
                label="Facebook :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="shopee"
                component={renderField}
                label="Shopee :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tokopedia"
                component={renderField}
                label="Tokopedia :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="bukalapak"
                component={renderField}
                label="Bukalapak :"
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

MarketplaceFormComponent = reduxForm({
  form: "formCreateMarketplace",
  validate: MarketplaceValidation,
  enableReinitialize: true,
})(MarketplaceFormComponent);
export default connect(mapStateToProps, null)(MarketplaceFormComponent);
