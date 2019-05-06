import React from "react";
import { Row, Container, Col } from "reactstrap";
import "./css/index.css";

export default function PeopleSearchResult() {
  return (
    <section className="PeopleSearchResult d-flex flex-column">
      <Container className="SearchResultContainer">
        <Row className="SearchResultDecscription">
          <Col className="col-2 col-sm-2 col-md-1">
            <img src="http://tinygraphs.com/spaceinvaders/tech?theme=sugarsweets&numcolors=4&size=220&fmt=svg" alt="" class="rounded-circle border border-light"></img>
          </Col>
          <Col className="col-10 col-sm-10 col-md-11">
            <h3><a color="link" href="/people/100">Vitaliy Rudenko</a></h3>
            {/* <p>Programmer</p> */}
            <p>I am a programmer and I can help you do your physics assignment and test</p>
          </Col>
        </Row>
        <Row className="SearchResultIcons">
          <Col className="SearchResultIconCol">
            <i className="fas fa-globe-europe"></i>
            <p>Brazil</p>
          </Col>
          <Col className="SearchResultIconCol">
            <i className="fas fa-user"></i>
            <p>1K</p>
          </Col>
          <Col className="SearchResultIconCol">
            <i className="far fa-star"></i>
            <p>20</p>
          </Col>
        </Row>
      </Container>
      <Container className="SearchResultContainer">
        <Row className="SearchResultDecscription">
          <Col className="col-2 col-sm-2 col-md-1">
            <img src="http://tinygraphs.com/spaceinvaders/universe?theme=sugarsweets&numcolors=4&size=220&fmt=svg" alt="" class="rounded-circle border border-light"></img>
          </Col>
          <Col className="col-10 col-sm-10 col-md-11">
            <h3><a color="link" href="/people/100">Vitaliy Rudenko</a></h3>
            {/* <p>Chef</p> */}
            <p>I am a programmer and I can help you do your physics assignment and test</p>
          </Col>
        </Row>
        <Row  className="SearchResultIcons">
          <Col className="SearchResultIconCol">
            <i className="fas fa-globe-europe"></i>
            <p>Jamaica</p>
          </Col>
          <Col className="SearchResultIconCol">
            <i className="fas fa-user"></i>
            <p>37</p>
          </Col>
          <Col className="SearchResultIconCol">
            <i className="far fa-star"></i>
            <p>1</p>
          </Col>
        </Row>
      </Container>
      <Container className="SearchResultContainer">
        <Row className="SearchResultDecscription">
          <Col className="col-2 col-sm-2 col-md-1">
            <img src="http://tinygraphs.com/squares/saa?theme=berrypie&numcolors=4&size=220&fmt=svg" alt="" class="rounded-circle border border-light"></img>
          </Col>
          <Col className="col-10 col-sm-10 col-md-11">
            <h3><a color="link" href="/people/100">Vitaliy Rudenko</a></h3>
            {/* <p>Artist</p> */}
            <p>I am a programmer and I can help you do your physics assignment and test</p>
          </Col>
        </Row>
        <Row className="SearchResultIcons">
          <Col className="SearchResultIconCol">
            <i className="fas fa-globe-europe"></i>
            <p>Britain</p>
          </Col>
          <Col className="SearchResultIconCol">
            <i className="fas fa-user"></i>
            <p>0</p>
          </Col>
          <Col className="SearchResultIconCol">
            <i className="far fa-star"></i>
            <p>84</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}