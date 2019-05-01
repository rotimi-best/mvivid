import React from 'react';
import {
  Container,
  Row, 
  Col,
  Button
} from "reactstrap";

export default function DoMore() {

  return (
    <section className="DoMoreSection">
      <Container className="DoMoreContainer">
        <h2 className="DoMoreHeader">Do more with mVivid</h2>
        <Row className="DoMoreCategories">
          <Col className="DoMoreCategory col-md-4 col-sm-12">
            <i class="fas fa-briefcase"></i>
            <h4>Find Talent</h4>
            <p>Find other students with skills like photography, caterine, barbing and then patronize them</p>
          </Col>
          <Col className="DoMoreCategory col-md-4 col-sm-12">
            <i class="far fa-copyright"></i>
            <h4>Build your brand</h4>
            <p>Share your skills and business with other students to have more impact</p>
          </Col>
          <Col className="DoMoreCategory col-md-4 col-sm-12">
            <i class="far fa-comment-alt"></i>
            <h4>Stay up to date</h4>
            <p>Ask any question about jobs, your country, university or any topic of your choice</p>
          </Col>
        </Row>
        <Button outline color="warning">Start your Journey</Button>
      </Container>
    </section>
  )
}