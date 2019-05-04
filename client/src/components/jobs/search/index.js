import React from "react";
import {
  Container
} from "reactstrap";
import SearchContainer from "../../search/SearchContainer";
import JobSearchResult from "./JobSearchResult";
import "./css/index.css";

export default function Jobs() {
  return (
    <Container className="ComponentBodyContainer">
      <SearchContainer header="Find the job of your dream" />
      <JobSearchResult />
    </Container>
  )
}