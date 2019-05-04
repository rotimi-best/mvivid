import React from "react";
import { Container } from "reactstrap";
import "./css/index.css";

export default function NotFound() {
  return (
    <section className="NotFound d-flex flex-column">
      <Container className="SearchResultContainer">
        <i className="fas fa-search-minus"></i>
        <h3>No result was found</h3>
      </Container>
    </section>
  )
}