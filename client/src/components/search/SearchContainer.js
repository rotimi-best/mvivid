import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import AskQuestion from "../forum/profile/AskQuestion";
import "./css/index.css";

export default function SearchContainer(props) {
  const { header, askButton, placeholder } = props;
  const [openModal, setOpenModal] = useState(false);
  
  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleAskQuestionSubmit = answer => {
    console.log('From parent', answer);

    toggleModal();
  }

  return (
    <section className="SearchContainerSection d-flex flex-column">
      <Container className="SearchContainer">
          <div className="d-flex flex-row justify-content-center pb-3">
            <h3 className="col-8 col-sm-8 col-md-8 col-xl-8">{header}</h3>
            {
              askButton && <a className="AskButton" onClick={toggleModal}>Ask a question</a>
            }
          </div>
        {/* <Row className="mt-2 mb-2"> */}
          {/* <Col className="SearchContainerCol">Jobs</Col>
          <Col className="SearchContainerCol">People</Col>
          <Col className="SearchContainerCol">Forum</Col> */}
        {/* </Row> */}
        <Form>
          <FormGroup className="mb-2 mr-sm-5">
            <Input
              type="search"
              name="search"
              id="SearchInput"
              placeholder={placeholder}
            />
          </FormGroup>
          <Button color="warning">Submit</Button>
        </Form>
        <AskQuestion 
          openModal={openModal} 
          toggleModal={toggleModal} 
          handleAskQuestionSubmit={handleAskQuestionSubmit}
        />
      </Container>
    </section>
  )
}