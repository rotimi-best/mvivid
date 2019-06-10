import React from 'react';
import { 
  Container, 
  Button,
  Card,
  CardHeader, 
  CardFooter, 
  CardBody,
  CardTitle, 
} from "reactstrap";
import "./index.css";

export default function JobProfile() {

  const handleBackClick = e => {
    e.preventDefault();
    return;
  };

  const handleBookmarkClick = e => {
    e.preventDefault();
    return;
  };

  const handleApplyClick = e => {
    e.preventDefault();
    return;
  };

  return (
    <Container className="JobProfile ComponentBodyContainer">
      <Card>
      <CardHeader><h2>Web Developer</h2></CardHeader>
        <CardBody>
          <CardTitle>
            <p><strong>Company</strong>: <a color="link" href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a></p>
            <p><strong>Location</strong>: Odessa Ukraine</p>
          </CardTitle>
          <div className="card-text">
            <div>
              <h4><strong>Job Description</strong></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quo saepe, error quisquam vero officia dicta, veniam repellendus minima quasi beatae blanditiis quia ducimus eum impedit possimus ea pariatur. In, delectus magni atque temporibus repellat aperiam reiciendis necessitatibus vero voluptatum quod obcaecati deleniti, hic ut, numquam repudiandae non expedita. Molestias delectus exercitationem labore nulla eaque, ipsa error at pariatur.</p>
            </div>
            <div>
              <h4><strong>Requirement</strong></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quo saepe, error quisquam vero officia dicta, veniam repellendus minima quasi beatae blanditiis quia ducimus eum impedit possimus ea pariatur. In, delectus magni atque temporibus repellat aperiam reiciendis necessitatibus vero voluptatum quod obcaecati deleniti, hic ut, numquam repudiandae non expedita. Molestias delectus exercitationem labore nulla eaque, ipsa error at pariatur.</p>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Button onClick={handleBackClick} className="mx-2" color="secondary">Back</Button>
          <Button onClick={handleBookmarkClick} outline color="secondary">Bookmark</Button>
          <Button onClick={handleApplyClick} className="mx-2" color="warning">Apply</Button>
        </CardFooter>
      </Card>
    </Container>
  );
}