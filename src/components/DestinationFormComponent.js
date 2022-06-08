import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import DestinationValidation from "../validations/DestinationValidation";

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
      city_id : state.destination.getDestinationDetail.city_id,
      nama_destinasi : state.destination.getDestinationDetail.nama_destinasi,
      tipe_destinasi : state.destination.getDestinationDetail.tipe_destinasi,
      deskripsi_destinasi : state.destination.getDestinationDetail.deskripsi_destinasi,
      koordinat_destinasi : state.destination.getDestinationDetail.koordinat_destinasi,
    }
  };
};

class DestinationFormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="city_id"
                component={renderField}
                label="ID Kota :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama_destinasi"
                component={renderField}
                label="Nama Destinasi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tipe_destinasi"
                component={renderField}
                label="Tipe Destinasi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="deskripsi_destinasi"
                component={renderField}
                label="Deskripsi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="koordinat_destinasi"
                component={renderField}
                label="Koordinat :"
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

DestinationFormComponent = reduxForm({
  form: "formCreateDestination",
  validate: DestinationValidation,
  enableReinitialize: true,
})(DestinationFormComponent);
export default connect(mapStateToProps, null)(DestinationFormComponent);
