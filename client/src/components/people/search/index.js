import React from "react";
import { Container } from "reactstrap";
import SearchContainer from "../../search/SearchContainer";
import PeopleSearchResult from "./PeopleSearchResult";
import "./css/index.css";

export default function People() {
  return (
    <Container className="ComponentBodyContainer">
      <SearchContainer 
        header="Find people with different skills" 
        placeholder="Enter any skill you are looking for in a person like hair dresser, photographer, cook"
      />
      <PeopleSearchResult />
    </Container>
  )
}