import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import CityValidation from "../validations/CityValidation";

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
      nama_kota  : state.city.getCityDetail.nama_kota,
      informasi_kota : state.city.getCityDetail.informasi_kota,
      koordinat_kota : state.city.getCityDetail.koordinat_kota,
      email_dinas_pariwisata_kota : state.city.getCityDetail.email_dinas_pariwisata_kota,
    }
  };
};

class CityFormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama_kota"
                component={renderField}
                label="Nama Kota :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="informasi_kota"
                component={renderField}
                label="Deskripsi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="koordinat_kota"
                component={renderField}
                label="Koordinat Kota :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="email_dinas_pariwisata_kota"
                component={renderField}
                label="Email :"
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

CityFormComponent = reduxForm({
  form: "formCreateCity",
  validate: CityValidation,
  enableReinitialize: true,
})(CityFormComponent);
export default connect(mapStateToProps, null)(CityFormComponent);
