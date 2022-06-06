import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import MerchandiseValidation from "../validations/MerchandiseValidation";

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
      city_id : state.merchandise.getMerchandiseDetail.city_id,
      nama_merchandise : state.merchandise.getMerchandiseDetail.nama_merchandise,
      merchandise_type : state.merchandise.getMerchandiseDetail.merchandise_type,
      deskripsi_merchandise : state.merchandise.getMerchandiseDetail.deskripsi_merchandise,
      alamat_toko : state.merchandise.getMerchandiseDetail.alamat_toko,
      id_alamat_marketplace : state.merchandise.getMerchandiseDetail.id_alamat_marketplace,
    }
  };
};

class MerchandiseFormComponent extends Component {
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
                name="nama_merchandise"
                component={renderField}
                label="Nama Merchandise :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="merchandise_type"
                component={renderField}
                label="Tipe Merchandise :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="deskripsi_merchandise"
                component={renderField}
                label="Deskripsi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat_toko"
                component={renderField}
                label="Alamat Toko :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="id_alamat_marketplace"
                component={renderField}
                label="id_alamat_marketplace :"
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

MerchandiseFormComponent = reduxForm({
  form: "formCreateMerchandise",
  validate: MerchandiseValidation,
  enableReinitialize: true,
})(MerchandiseFormComponent);
export default connect(mapStateToProps, null)(MerchandiseFormComponent);
