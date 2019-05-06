import React, { useState } from "react";
import { 
  Form,
  FormFeedback,
  Button, 
  FormGroup, 
  Label, 
  Input,
  Col,
  Modal,
  ModalBody,
  ModalFooter } from "reactstrap";

export default function AskQuestion(props) {
  const { openModal, toggleModal, handleAskQuestionSubmit } = props;
  const [answer, setAnswer] = useState({
    title: {
      text: '',
      valid: false
    },
    description: {
      text: '',
      valid: false
    }
  });

  const handleOnChange = e => {
    e.preventDefault();
    console.log(answer[e.target.name])
    const inputField = e.target.name;
    console.log(inputField.length)

    const valid = inputField === "title" 
      ?  answer[inputField].text.length > 10 
      : answer[inputField].text.length > 20;

    setAnswer({ 
      ...answer, 
      [e.target.name]: { 
        valid,
        text: e.target.value
      }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (answer.title.text.length <= 10 ) {
      return setAnswer({ 
        ...answer, 
        title: {
          ...answer.title,
          valid: false
        }
      });
    }

    if (answer.description.text.length <= 20 ) {
      return setAnswer({ 
        ...answer, 
        description: {
          ...answer.description,
          valid: false
        }
      });
    }
    
    setAnswer({ 
      title: {
        text: '',
        valid: false
      },
      description: {
        text: '',
        valid: false
      }
    });
    
    handleAskQuestionSubmit(answer);
  }

  return (
    <Modal isOpen={openModal}>
      <ModalBody>
        <Form>
          <FormGroup row>
            <Label sm={12}>Title</Label>
            <Col sm={12}>
              <Input 
                valid={answer.title.valid}
                invalid={!answer.title.valid}
                value={answer.title.text} 
                onChange={handleOnChange} 
                type="text"
                name="title"
                placeholder="Enter a title like: Where can I find a job in odessa?"
              />
              <FormFeedback>Your title should be more than 10 characters</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={12}>Description</Label>
            <Col sm={12}>
              <Input 
                valid={answer.description.valid}
                invalid={!answer.description.valid}
                value={answer.description.text} 
                onChange={handleOnChange} 
                type="textarea" 
                name="description" 
                placeholder="Describe your question like: I am looking for a job around City Center and I want a salary of $500 monthly"
              />
              <FormFeedback>Your description should be more than 20 characters</FormFeedback>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
          <Button inline="true" color="warning" onClick={handleSubmit}>Submit</Button>
          <Button inline="true" color="primary" onClick={toggleModal}>Close</Button>
      </ModalFooter>
    </Modal>
  )
};