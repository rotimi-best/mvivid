import React from "react";
import { Row, Container, Col } from "reactstrap";
import "./css/index.css";

export default function ForumSearchResult() {
  return (
    <section className="ForumSearchResult d-flex flex-column">
      <Container className="SearchResultContainer">
        <Row>
          {/* <Col className="col-12 col-sm-12 col-md-2 col-auto ForumQuestionStatistics">
            <p className="ForumAnswerStat">10</p>
            <p className="">answers</p>
            <p className="ForumAnswerClaps">50</p>
            <p className="">claps</p>
          </Col> */}
          <Col className="col-12 col-sm-12 col-md-10 col-auto ForumQuestionDecscription">
            <h3><a color="link" href="/forum/100">Who is the best lecturer in computer science</a></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam molestiae praesentium totam voluptatum blanditiis dolorum voluptatem pariatur nesciunt quis itaque.</p>
          </Col>
        </Row>
      </Container>
      <Container className="SearchResultContainer">
        <Row>
          <Col className="col-12 col-sm-12 col-md-10 col-auto ForumQuestionDecscription">
            <h3><a color="link" href="/forum/100">How do I find a restaurant in polytech</a></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam molestiae praesentium totam voluptatum blanditiis dolorum voluptatem pariatur nesciunt quis itaque.</p>
          </Col>
        </Row>
      </Container>
      <Container className="SearchResultContainer">
        <Row>
          <Col className="col-12 col-sm-12 col-md-10 col-auto ForumQuestionDecscription">
            <h3><a color="link" href="/forum/100">Who can solve this physics problem?</a></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam molestiae praesentium totam voluptatum blanditiis dolorum voluptatem pariatur nesciunt quis itaque.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}