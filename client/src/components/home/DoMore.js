import React from 'react';
import { withRouter } from "react-router-dom";
import {
  Container,
  Row, 
  Col,
  Button
} from "reactstrap";

export default withRouter((props) => {

  const handleClick = e => {
    e.preventDefault();

    props.history.push("/login");
  }

  return (
    <section className="DoMoreSection">
      <Container className="DoMoreContainer">
        <h2 className="DoMoreHeader">Do more with mVivid</h2>
        <Row className="DoMoreCategories">
          <Col className="DoMoreCategory col-md-4 col-sm-12">
            <i className="fas fa-briefcase"></i>
            <h4>Find Talent</h4>
            <p>Find other students with skills like photography, caterine, barbing and then patronize them</p>
          </Col>
          <Col className="DoMoreCategory col-md-4 col-sm-12">
            <i className="far fa-copyright"></i>
            <h4>Build your brand</h4>
            <p>Share your skills and business with other students to have more impact</p>
          </Col>
          <Col className="DoMoreCategory col-md-4 col-sm-12">
            <i className="far fa-comment-alt"></i>
            <h4>Stay up to date</h4>
            <p>Ask any question about jobs, your country, university or any topic of your choice</p>
          </Col>
        </Row>
        <Button onClick={handleClick} outline color="warning">Start your Journey</Button>
      </Container>
    </section>
  )
})