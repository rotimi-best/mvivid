import React from 'react';
import { 
  Container, 
  Row,
  Col
} from "reactstrap";
import "./index.css";

export default function PeopleProfile() {
  return (
    <Container className="PeopleProfile ComponentBodyContainer">
      <h2 className="text-center">Who is the dean of ИКС</h2>
      <div className="QuestionBox Box">
        <Row>
          <Col className="QuestionByCol col-2 col-sm-2 col-md-2 align-items-center">
            <i className="QuestionByIcon far fa-user-circle"></i>
            <p className="QuestionByUserName">Anton Osatyk</p>
          </Col>
          <Col className="QuestionDescriptionCol col-10 col-sm-10 col-md-10">
            <span className="QuestionBanner">Question</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?</p>
          </Col>
        </Row>
      </div>
      <div className="AnswerBox Box">
        <Row>
          <Col className="AnswerByCol col-2 col-sm-2 col-md-2">
            <i className="AnswerByIcon far fa-user-circle"></i>
            <p className="AnswerByUserName">Kristina Solovyov</p>
          </Col>
          <Col className="AnswerDescriptionCol col-10 col-sm-10 col-md-10">
            <span className="AnswerBanner">Answer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia eveniet molestias facilis tempore doloremque voluptates, possimus mollitia optio laudantium?</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}