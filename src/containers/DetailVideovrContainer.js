import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getVideovrDetail } from "../actions/videovrAction";
import DetailVideovrComponent from "../components/DetailVideovrComponent";

class DetailVideovrContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getVideovrDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Videovr</h1>
        <DetailVideovrComponent />
      </Container>
    );
  }
}

export default connect()(DetailVideovrContainer);
