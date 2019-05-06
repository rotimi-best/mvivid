import React from "react";
import {
  Row,
  Col
} from "reactstrap";

export default function Question(props) {
  const { username, question } = props;

  return (
    <div className="ForumBox">
      <Row>
        <Col className="ForumUserProfile col-2 col-sm-2 col-md-2 align-items-center">
          <i className="ForumUserIcon far fa-user-circle"></i>
          <p className="ForumUserName">{username}</p>
        </Col>
        <Col className="ForumDescriptionCol col-10 col-sm-10 col-md-10">
          {/* <span className="QuestionBanner">Question</span> */}
          <p>{question}</p>
        </Col>
      </Row>
    </div>
  );
}