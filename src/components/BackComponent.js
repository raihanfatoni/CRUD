import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponent = () => {
  let history = useHistory();
  const clickHandling = () => {
    history.goBack()
  }

  return (
    <Row className="mb-2">
      <Col>
        {/* <Link to="/user"> */}
          <Button color="dark" onClick={clickHandling}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        {/* </Link> */}
      </Col>
    </Row>
  );
};

export default BackComponent;
