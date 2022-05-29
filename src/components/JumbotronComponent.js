import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">
            Hello Admin.
          </p>
          <hr className="my-2" />
          <p>
            In this page you can do some operation with our data like create the data, delete the data, and edit the data .
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
