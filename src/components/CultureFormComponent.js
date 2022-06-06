import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import CultureValidation from "../validations/CultureValidation";

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
      city_id : state.culture.getCultureDetail.city_id,
      nama_budaya : state.culture.getCultureDetail.nama_budaya,
      deskripsi_budaya : state.culture.getCultureDetail.deskripsi_budaya,
      filosofi_budaya : state.culture.getCultureDetail.filosofi_budaya,
      sejarah_budaya : state.culture.getCultureDetail.sejarah_budaya,
    }
  };
};

class CultureFormComponent extends Component {
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
                name="nama_budaya"
                component={renderField}
                label="Nama Budaya :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="deskripsi_budaya"
                component={renderField}
                label="Deskripsi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="filosofi_budaya"
                component={renderField}
                label="Filosofi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="sejarah_budaya"
                component={renderField}
                label="Sejarah :"
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

CultureFormComponent = reduxForm({
  form: "formCreateCulture",
  validate: CultureValidation,
  enableReinitialize: true,
})(CultureFormComponent);
export default connect(mapStateToProps, null)(CultureFormComponent);
