import React, { useState } from "react";
import { Form, Button, FormGroup, Label, Input, Col } from "reactstrap";

export default function AnswerQuestion() {
  const [answer, setAnswer] = useState('');

  const handleOnChange = e => {
    e.preventDefault();

    const a = e.target.value;
    
    setAnswer(a);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const finalAnswer = e.target.answer.value;
    
    setAnswer(finalAnswer);
    // Send to API and update the list of answers in Parent Component
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="ForumAnswerInput" sm={12}>Your Answer</Label>
        <Col sm={12}>
          <Input value={answer} onChange={handleOnChange} type="textarea" name="answer" id="ForumAnswerInput" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button color="warning">Post Your Answer</Button>
      </FormGroup>
    </Form>
  )
};