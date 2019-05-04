import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import "./css/index.css";

export default function JobSearchResult() {

  return (
    <section className="d-flex flex-column">
      <Container className="SearchResultContainer">
        <Row className="SearchResultDecscription">
          <Col>
            <h3><a color="link" href="/jobs/100">Project Manager at Pinterest</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus ex, delectus tempora animi laborum sunt. Animi incidunt omnis sequi.</p>
          </Col>
        </Row>
        <Row className="SearchResultIcons">
          <Col className="location SearchResultIconCol">
            <i className="fas fa-street-view"></i>
            <p>Ukraine</p>
          </Col>
          <Col className="salary SearchResultIconCol">
            <i className="fas fa-dollar-sign"></i>
            <p>100 - 500</p>
          </Col>
          <Col className="bookmark SearchResultIconCol">
            <i className="far fa-bookmark"></i>
            <p>Save</p>
          </Col>
        </Row>
      </Container>
      <Container className="SearchResultContainer">
        <Row className="SearchResultDecscription">
          <Col className="">
            <h3><a color="link" href="/jobs/100">Project Manager at Pinterest</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus ex, delectus tempora animi laborum sunt. Animi incidunt omnis sequi.</p>
          </Col>
        </Row>
        <Row className="SearchResultIcons">
          <Col className="location SearchResultIconCol">
            <i className="fas fa-street-view"></i>
            <p>Ukraine</p>
          </Col>
          <Col className="salary SearchResultIconCol">
            <i className="fas fa-dollar-sign"></i>
            <p>100 - 500</p>
          </Col>
          <Col className="bookmark SearchResultIconCol">
            <i className="far fa-bookmark"></i>
            <p>Save</p>
          </Col>
        </Row>
      </Container>
      <Container className="SearchResultContainer">
        <Row className="SearchResultDecscription">
          <Col className="">
            <h3><a color="link" href="/jobs/100">Project Manager at Pinterest</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus ex, delectus tempora animi laborum sunt. Animi incidunt omnis sequi.</p>
          </Col>
        </Row>
        <Row className="SearchResultIcons">
          <Col className="location SearchResultIconCol">
            <i className="fas fa-street-view"></i>
            <p>Ukraine</p>
          </Col>
          <Col className="salary SearchResultIconCol">
            <i className="fas fa-dollar-sign"></i>
            <p>100 - 500</p>
          </Col>
          <Col className="bookmark SearchResultIconCol">
            <i className="far fa-bookmark"></i>
            <p>Save</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}