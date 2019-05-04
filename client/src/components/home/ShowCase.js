import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { Container, Button } from 'reactstrap';

import './css/index.css';
import Background from "../../assets/home_background.jpg";

export default function ShowCase() {
  const [redirect, setRedirect] = useState(false);

  const style = {
    height: '80vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const handleButton = e => {
    e.preventDefault();

    setRedirect(!redirect);
  }

  return (
    <section className="ShowCase" style={style}>
      <div className="DarkOverlay">
        <Container className="ShowCaseContainer">
          <h1 className="ShowCaseHeader">Providing opportunities for Students</h1>
          <p className="lead">Students can find jobs, internships, build their businesses, ask questions and get valuable answers.</p>
          <p className="lead lead-join"> Join the world's largest student community.</p>
          <Button className="ShowCaseButton" onClick={handleButton}>Get Started</Button>
        </Container>
      </div>
    </section>
  );
}