import React from "react";
import { withRouter } from "react-router-dom";
import { 
  Container,
  Row,
  Col,
  Button,
  Card
} from "reactstrap";

import './css/index.css';

export default withRouter((props) => {

  const handleClick = e => {
    e.preventDefault();

    props.history.push("/login");
  }

  return (
    <section className="EmployerSection">
      <Container className="EmployerContainer">
        <h2 className="EmployerHeader">Made easier for <span className="OrangeText">Employers</span></h2>
        <Row className="EmployerCategories">
          <Col className="EmployerCategory col-md-3 col-sm-12">
            <Card body>
              <i className="fas fa-pen"></i>
              <h4>Post a Job</h4>
            </Card>
          </Col>
          <Col className="EmployerCategory col-md-3 col-sm-12">
            <Card body>
              <i className="fas fa-running"></i>
              <h4>Students apply</h4>
            </Card>
          </Col>
          <Col className="EmployerCategory col-md-3 col-sm-12">
            <Card body>
              <i className="far fa-hand-pointer"></i>
              <h4>You pick</h4>
            </Card>
          </Col>
          <Col className="EmployerCategory col-md-3 col-sm-12">
            <Card body>
              <i className="far fa-thumbs-up"></i>
              <h4>Thank us later</h4>
            </Card>
          </Col>
        </Row>
        <Button onClick={handleClick} color="warning"> Find Students</Button>
      </Container>
    </section>
  );
})
