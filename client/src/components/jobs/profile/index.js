import React from 'react';
import { 
  Container, 
  Button,
  Card,
  CardHeader, 
  CardFooter, 
  CardBody,
  CardTitle, 
  CardText,
} from "reactstrap";
import "./index.css";

export default function JobProfile() {
  return (
    <Container className="JobProfile ComponentBodyContainer">
      <Card>
      <CardHeader><h2>Web Developer</h2></CardHeader>
        <CardBody>
          <CardTitle>
            <p><strong>Company</strong>: <a color="link" href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a></p>
            <p><strong>Location</strong>: Odessa Ukraine</p>
          </CardTitle>
          <CardText>
            <div>
              <h4><strong>Job Description</strong></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quo saepe, error quisquam vero officia dicta, veniam repellendus minima quasi beatae blanditiis quia ducimus eum impedit possimus ea pariatur. In, delectus magni atque temporibus repellat aperiam reiciendis necessitatibus vero voluptatum quod obcaecati deleniti, hic ut, numquam repudiandae non expedita. Molestias delectus exercitationem labore nulla eaque, ipsa error at pariatur.</p>
            </div>
            <div>
              <h4><strong>Requirement</strong></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quo saepe, error quisquam vero officia dicta, veniam repellendus minima quasi beatae blanditiis quia ducimus eum impedit possimus ea pariatur. In, delectus magni atque temporibus repellat aperiam reiciendis necessitatibus vero voluptatum quod obcaecati deleniti, hic ut, numquam repudiandae non expedita. Molestias delectus exercitationem labore nulla eaque, ipsa error at pariatur.</p>
            </div>
          </CardText>
        </CardBody>
        <CardFooter>
          <Button outline color="secondary">Bookmark</Button>
          <Button className="mx-2" color="warning">Apply</Button>
        </CardFooter>
      </Card>
    </Container>
  );
}