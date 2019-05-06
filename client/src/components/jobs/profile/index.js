import React from 'react';
import { 
  Container, 
  Button,
  Row,
  Col
} from "reactstrap";
import "./index.css";

export default function JobProfile() {
  return (
    <Container className="JobProfile ComponentBodyContainer">
      <Row className="justify-content-md-center">
        <Col className="col-md-auto">
          <h2>Web Developer</h2>
          <div className="d-inline-flex JobProfileHeaderDetail">
            <p className="Company py-1 px-3"><a color="link" href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a></p>
            <p className="py-1 px-3">Odessa Ukraine</p>
          </div>
        </Col>
      </Row>
        <div>
          <h4 className="">Job Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quo saepe, error quisquam vero officia dicta, veniam repellendus minima quasi beatae blanditiis quia ducimus eum impedit possimus ea pariatur. In, delectus magni atque temporibus repellat aperiam reiciendis necessitatibus vero voluptatum quod obcaecati deleniti, hic ut, numquam repudiandae non expedita. Molestias delectus exercitationem labore nulla eaque, ipsa error at pariatur.</p>
        </div>
        <div>
          <h4>Requirement</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quo saepe, error quisquam vero officia dicta, veniam repellendus minima quasi beatae blanditiis quia ducimus eum impedit possimus ea pariatur. In, delectus magni atque temporibus repellat aperiam reiciendis necessitatibus vero voluptatum quod obcaecati deleniti, hic ut, numquam repudiandae non expedita. Molestias delectus exercitationem labore nulla eaque, ipsa error at pariatur.</p>
        </div>
        <Button color="warning">Apply</Button>
    </Container>
  );
}