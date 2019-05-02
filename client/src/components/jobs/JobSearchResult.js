import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import "./css/index.css";

export default function JobSearchResult(props) {

  return (
    <section className="JobSearchResult d-flex flex-column">
      <Container className="JobSearchResultContainer">
        <Row className="">
          <Col className="">
            <h3><a color="link" href="/jobs/100">Vitaliy Rudenko</a></h3>
            <p>I am a programmer and I can help you do your physics assignment and test</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fas fa-street-view"></i> Ukraine
          </Col>
          <Col>
            <p>100 contacts</p>
          </Col>
          <Col>
            <p>20 Recommendation</p>
          </Col>
        </Row>
      </Container>
      <Container className="JobSearchResultContainer">
        <Row className="">
          <Col className="">
            <h3><a color="link" href="/jobs/100">Vitaliy Rudenko</a></h3>
            <p>I am a programmer and I can help you do your physics assignment and test</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fas fa-street-view"></i> Ukraine
          </Col>
          <Col>
            <p>100 contacts</p>
          </Col>
          <Col>
            <p>20 Recommendation</p>
          </Col>
        </Row>
      </Container>
      <Container className="JobSearchResultContainer">
        <Row className="">
          <Col className="">
            <h3><a color="link" href="/jobs/100">Vitaliy Rudenko</a></h3>
            <p>I am a programmer and I can help you do your physics assignment and test</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fas fa-street-view"></i> Ukraine
          </Col>
          <Col>
            <p>100 contacts</p>
          </Col>
          <Col>
            <p>20 Recommendation</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}