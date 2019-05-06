import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export default function Skills(props) {
  return (
    <Container className="SkillsContainer">
      <h2>Skills</h2>
      <Row>
        <Col>
          <p><i class="fas fa-circle"></i> Photography</p>
        </Col>
        <Col>
          <p><i class="fas fa-circle"></i> Cook</p>
        </Col>
        <Col>
          <p><i class="fas fa-circle"></i> Physics</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p><i class="fas fa-circle"></i> Cleaning</p>
        </Col>
        <Col>
          <p><i class="fas fa-circle"></i> Baking</p>
        </Col>
        <Col>
          <p><i class="fas fa-circle"></i> Typing</p>
        </Col>
      </Row>
    </Container>
  );
}