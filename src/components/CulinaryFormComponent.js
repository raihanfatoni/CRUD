import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import CulinaryValidation from "../validations/CulinaryValidation";

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
      city_id : state.culinary.getCulinaryDetail.city_id,
      nama_kuliner : state.culinary.getCulinaryDetail.nama_kuliner,
      deskripsi_kuliner : state.culinary.getCulinaryDetail.deskripsi_kuliner,
    }
  };
};

class CulinaryFormComponent extends Component {
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
                name="nama_kuliner"
                component={renderField}
                label="Nama Kuliner :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="deskripsi_kuliner"
                component={renderField}
                label="Deskripsi :"
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

CulinaryFormComponent = reduxForm({
  form: "formCreateCulinary",
  validate: CulinaryValidation,
  enableReinitialize: true,
})(CulinaryFormComponent);
export default connect(mapStateToProps, null)(CulinaryFormComponent);
