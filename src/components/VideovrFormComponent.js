import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import VideovrValidation from "../validations/VideovrValidation";

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
      destination_id : state.videovr.getVideovrDetail.destination_id,
      link_video : state.videovr.getVideovrDetail.link_video,
      deskripsi : state.videovr.getVideovrDetail.deskripsi,
      durasi : state.videovr.getVideovrDetail.durasi,
    }
  };
};

class VideovrFormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="destination_id"
                component={renderField}
                label="ID Destinasi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="link_video"
                component={renderField}
                label="Link Video :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="deskripsi"
                component={renderField}
                label="Deskripsi :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="durasi"
                component={renderField}
                label="Durasi :"
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

VideovrFormComponent = reduxForm({
  form: "formCreateVideovr",
  validate: VideovrValidation,
  enableReinitialize: true,
})(VideovrFormComponent);
export default connect(mapStateToProps, null)(VideovrFormComponent);
