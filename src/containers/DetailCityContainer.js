import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/CityBackComponent";
import { connect } from "react-redux";
import { getCityDetail } from "../actions/cityAction";
import DetailCityComponent from "../components/DetailCityComponent";

class DetailCityContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCityDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail City</h1>
        <DetailCityComponent />
      </Container>
    );
  }
}

export default connect()(DetailCityContainer);
