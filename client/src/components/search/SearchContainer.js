import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import "./css/index.css";

export default function SearchContainer(props) {
  const { header } = props;
  
  return (
    <section className="SearchContainerSection d-flex flex-column">
      <Container className="SearchContainer">
          <h3>{header}</h3>
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
              placeholder="Enter the skill you are looking for"
            />
          </FormGroup>
          <Button color="warning">Submit</Button>
        </Form>
      </Container>
    </section>
  )
}